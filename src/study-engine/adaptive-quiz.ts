import { Question } from '@/types/study';

export interface QuizPerformanceHistory {
  questionId: string;
  correct: boolean;
  timestamp: number;
  difficulty: number;
}

/**
 * Selects the next optimal question from a pool based on recent performance.
 * 
 * Algorithm sketch:
 * 1. Filter out recently answered questions (cooldown).
 * 2. Calculate current estimated user ability based on recent answers (e.g. average difficulty of last 5 correct answers).
 * 3. Find questions that match the user's ability level (Target Difficulty = Ability + 0.5).
 * 4. Add adaptive weight from the question definition itself (e.g. some questions are marked as important).
 * 5. Add weight if the question was previously failed.
 * 6. Pick the highest weighted question.
 */
export function selectNextQuestion(
  pool: Question[],
  history: QuizPerformanceHistory[]
): Question | null {
  if (pool.length === 0) return null;

  const now = Date.now();
  const recentHistory = history.filter(h => now - h.timestamp < 24 * 60 * 60 * 1000); // last 24h

  // Find recently asked (last 5 to avoid immediate repeats)
  const recentlyAskedIds = new Set(history.slice(-5).map(h => h.questionId));
  const availablePool = pool.filter(q => !recentlyAskedIds.has(q.id));

  if (availablePool.length === 0) {
    // If all were recently asked, just pick a random one from the full pool
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // Calculate user ability (1-5)
  let ability = 2.5; // Default middle
  if (recentHistory.length > 0) {
    const recentCorrect = recentHistory.filter(h => h.correct);
    if (recentCorrect.length > 0) {
      ability = recentCorrect.reduce((sum, h) => sum + h.difficulty, 0) / recentCorrect.length;
    } else {
      ability = 1; // Struggling
    }
  }

  const targetDifficulty = Math.min(5, Math.max(1, ability + 0.5));

  // Score each question
  const scoredQuestions = availablePool.map(q => {
    let score = 10;
    
    // Proximity to target difficulty (closer is better, max 5 points)
    const diffDiff = Math.abs(q.difficulty - targetDifficulty);
    score += (5 - diffDiff);

    // Adaptive weight from question definition
    score += (q.adaptiveWeight || 0) * 2;

    // Has been failed before?
    const previousFailures = history.filter(h => h.questionId === q.id && !h.correct).length;
    score += previousFailures * 3; // Boost weight significantly if failed previously

    return { question: q, score };
  });

  // Sort by score descending
  scoredQuestions.sort((a, b) => b.score - a.score);

  // Return the best match
  return scoredQuestions[0].question;
}
