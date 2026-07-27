import { create } from 'zustand';
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware';
import * as idb from 'idb-keyval';
import { MasteryLevel, ProgressSnapshot } from '@/types/study';
import { calculateNextReview, ReviewGrade, createInitialCardState } from './spaced-repetition';

// Custom storage for Zustand using idb-keyval with a LocalStorage fallback
const idbStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    try {
      const value = await idb.get(name);
      return value || null;
    } catch (err) {
      console.warn('IndexedDB failed, falling back to localStorage', err);
      return localStorage.getItem(name);
    }
  },
  setItem: async (name: string, value: string): Promise<void> => {
    try {
      await idb.set(name, value);
    } catch (err) {
      console.warn('IndexedDB failed, falling back to localStorage', err);
      localStorage.setItem(name, value);
    }
  },
  removeItem: async (name: string): Promise<void> => {
    try {
      await idb.del(name);
    } catch (err) {
      console.warn('IndexedDB failed, falling back to localStorage', err);
      localStorage.removeItem(name);
    }
  },
};

interface ProgressState extends ProgressSnapshot {
  // Actions
  recordFlashcardReview: (cardId: string, topicId: string, grade: ReviewGrade) => void;
  recordQuizAnswer: (questionId: string, topicId: string, correct: boolean, difficulty: number) => void;
  updateTopicMastery: (topicId: string) => void;
  incrementStreak: () => void;
}

const getTodayString = () => new Date().toISOString().split('T')[0];

const INITIAL_STATE: Omit<ProgressSnapshot, 'version'> = {
  lastUpdated: Date.now(),
  streak: 0,
  // Empty rather than today's date, so the very first study session starts a 1-day streak.
  lastStudyDate: '',
  topicMastery: {},
  cardStates: {},
  cardTopics: {},
  quizHistory: [],
  studiedTopicIds: [],
};

/** Numeric weight per mastery level, used to average a subject into one percentage. */
export const MASTERY_WEIGHT: Record<MasteryLevel, number> = {
  new: 0,
  learning: 0.34,
  reviewing: 0.67,
  mastered: 1,
};

/**
 * Derive a topic's mastery from its recorded flashcard states and quiz answers.
 * Both signals are combined so a topic cannot look mastered from cards alone.
 * @param topicId - Topic being recalculated.
 * @param state - Current progress snapshot.
 * @returns The mastery level the evidence supports.
 */
function deriveTopicMastery(topicId: string, state: ProgressSnapshot): MasteryLevel {
  const cardIds = Object.entries(state.cardTopics)
    .filter(([, id]) => id === topicId)
    .map(([cardId]) => cardId);

  const cardScores = cardIds
    .map((cardId) => state.cardStates[cardId])
    .filter(Boolean)
    .map((card) => MASTERY_WEIGHT[card.masteryLevel]);

  const topicAnswers = state.quizHistory.filter((entry) => entry.topicId === topicId);
  const quizScore = topicAnswers.length
    ? topicAnswers.filter((entry) => entry.correct).length / topicAnswers.length
    : null;

  const signals: number[] = [];
  if (cardScores.length) {
    signals.push(cardScores.reduce((sum, value) => sum + value, 0) / cardScores.length);
  }
  if (quizScore !== null) signals.push(quizScore);

  if (!signals.length) return 'new';

  const score = signals.reduce((sum, value) => sum + value, 0) / signals.length;
  const evidence = cardScores.length + topicAnswers.length;

  if (score >= 0.85 && evidence >= 3) return 'mastered';
  if (score >= 0.5) return 'reviewing';
  return 'learning';
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      version: 1,
      ...INITIAL_STATE,

      recordFlashcardReview: (cardId, topicId, grade) => {
        set((state) => {
          const currentState = state.cardStates[cardId] || createInitialCardState();
          const nextState = calculateNextReview(currentState, grade);

          return {
            ...state,
            cardStates: {
              ...state.cardStates,
              [cardId]: nextState,
            },
            // Remember which topic owns this card so mastery can be aggregated later.
            cardTopics: {
              ...state.cardTopics,
              [cardId]: topicId,
            },
            lastUpdated: Date.now(),
          };
        });

        // Recalculate mastery once the card state has been committed.
        get().updateTopicMastery(topicId);
        get().incrementStreak();
      },

      recordQuizAnswer: (questionId, topicId, correct, difficulty) => {
        set((state) => {
          const historyEntry = {
            questionId,
            topicId,
            correct,
            timestamp: Date.now(),
            difficulty,
          };
          return {
            ...state,
            quizHistory: [...state.quizHistory, historyEntry].slice(-1000), // Keep last 1000 answers
            lastUpdated: Date.now(),
          };
        });

        get().updateTopicMastery(topicId);
        get().incrementStreak();
      },

      updateTopicMastery: (topicId) => {
        set((state) => {
          const studiedIds = state.studiedTopicIds.includes(topicId)
            ? state.studiedTopicIds
            : [...state.studiedTopicIds, topicId];

          return {
            ...state,
            topicMastery: {
              ...state.topicMastery,
              [topicId]: deriveTopicMastery(topicId, state),
            },
            studiedTopicIds: studiedIds,
          };
        });
      },

      incrementStreak: () => {
        set((state) => {
          const today = getTodayString();
          if (state.lastStudyDate === today) {
            return state; // Already studied today
          }
          
          const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
          
          let newStreak = state.streak;
          if (state.lastStudyDate === yesterday) {
            newStreak += 1;
          } else {
            newStreak = 1;
          }

          return {
            ...state,
            streak: newStreak,
            lastStudyDate: today,
            lastUpdated: Date.now(),
          };
        });
      },
    }),
    {
      name: 'it-reviewer-progress-v1',
      storage: createJSONStorage(() => idbStorage),
      version: 1,
    }
  )
);

/**
 * Average a subject's topics into a single mastery percentage.
 * Topics with no recorded activity count as zero so the figure is never flattering.
 * @param topicIds - Every topic identifier belonging to the subject.
 * @param topicMastery - The persisted topic mastery map.
 * @returns Whole-number percentage between 0 and 100.
 */
export function computeSubjectMastery(
  topicIds: string[],
  topicMastery: Record<string, MasteryLevel>
): number {
  if (!topicIds.length) return 0;
  const total = topicIds.reduce(
    (sum, topicId) => sum + MASTERY_WEIGHT[topicMastery[topicId] ?? 'new'],
    0
  );
  return Math.round((total / topicIds.length) * 100);
}
