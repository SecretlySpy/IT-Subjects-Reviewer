import { MasteryLevel } from '@/types/study';

export interface CardState {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: number;
  masteryLevel: MasteryLevel;
}

export type ReviewGrade = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * SuperMemo 2 (SM-2) simplified algorithm for spaced repetition.
 * 
 * Grades:
 * 5: Perfect response
 * 4: Correct response after a hesitation
 * 3: Correct response recalled with serious difficulty
 * 2: Incorrect response; where the correct one seemed easy to recall
 * 1: Incorrect response; the correct one remembered
 * 0: Complete blackout
 */
export function calculateNextReview(currentState: CardState, grade: ReviewGrade): CardState {
  let { easeFactor, interval, repetitions } = currentState;

  if (grade >= 3) {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }

  // Calculate new ease factor
  easeFactor = easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  
  if (easeFactor < 1.3) {
    easeFactor = 1.3;
  }

  // Determine mastery level
  let masteryLevel: MasteryLevel = 'new';
  if (repetitions === 0) {
    masteryLevel = 'learning';
  } else if (repetitions > 0 && repetitions < 4) {
    masteryLevel = 'reviewing';
  } else if (repetitions >= 4) {
    masteryLevel = 'mastered';
  }

  // Calculate next review timestamp (interval in days)
  const now = Date.now();
  const nextReview = now + interval * 24 * 60 * 60 * 1000;

  return {
    easeFactor,
    interval,
    repetitions,
    nextReview,
    masteryLevel,
  };
}

export function createInitialCardState(): CardState {
  return {
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: Date.now(),
    masteryLevel: 'new',
  };
}

/**
 * Build the review queue for a deck.
 *
 * Cards that have never been reviewed come first (they have no scheduled date),
 * then cards whose scheduled review time has passed, earliest first.
 *
 * @param cardIds - Every card identifier in the deck, in authoring order.
 * @param cardStates - Persisted scheduling state keyed by card identifier.
 * @param now - Current epoch milliseconds; injected so the result is testable.
 * @returns Card identifiers that are due, in the order they should be shown.
 */
export function selectDueCardIds(
  cardIds: string[],
  cardStates: Record<string, CardState>,
  now: number = Date.now()
): string[] {
  const unseen = cardIds.filter((id) => !cardStates[id]);
  const due = cardIds
    .filter((id) => cardStates[id] && cardStates[id].nextReview <= now)
    .sort((a, b) => cardStates[a].nextReview - cardStates[b].nextReview);
  return [...unseen, ...due];
}
