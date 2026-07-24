import { create } from 'zustand';
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware';
import * as idb from 'idb-keyval';
import { ProgressSnapshot } from '@/types/study';
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
  lastStudyDate: getTodayString(),
  topicMastery: {},
  cardStates: {},
  quizHistory: [],
  studiedTopicIds: [],
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      version: 1,
      ...INITIAL_STATE,

      recordFlashcardReview: (cardId, topicId, grade) => {
        set((state) => {
          const currentState = state.cardStates[cardId] || createInitialCardState();
          const nextState = calculateNextReview(currentState, grade);
          
          const newCardStates = {
            ...state.cardStates,
            [cardId]: nextState,
          };

          return {
            ...state,
            cardStates: newCardStates,
            lastUpdated: Date.now(),
          };
        });
        
        // Asynchronously update topic mastery after card update
        get().updateTopicMastery(topicId);
        get().incrementStreak();
      },

      recordQuizAnswer: (questionId, topicId, correct, difficulty) => {
        set((state) => {
          const historyEntry = {
            questionId,
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
          // This is a naive mastery calculation. 
          // In Epic 3/4 we can refine this to weigh flashcards vs quizzes.
          // For now, if they interact, they are 'learning'. If they have a good streak, 'reviewing' or 'mastered'.
          
          // Let's aggregate card states for this topic
          // In a real scenario we'd need a map of topicId -> cardIds, but we can iterate for now
          // (Assuming we pass topicId to recordFlashcardReview which we do).
          
          // Note: Since we don't have the full list of cards per topic in the store, 
          // a simple heuristic for now: just mark it 'learning' if it's new.
          let currentMastery = state.topicMastery[topicId] || 'new';
          
          if (currentMastery === 'new') {
            currentMastery = 'learning';
          }
          
          const studiedIds = state.studiedTopicIds.includes(topicId) 
            ? state.studiedTopicIds 
            : [...state.studiedTopicIds, topicId];

          return {
            ...state,
            topicMastery: {
              ...state.topicMastery,
              [topicId]: currentMastery,
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
