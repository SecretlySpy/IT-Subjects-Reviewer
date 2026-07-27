import React, { useCallback, useMemo, useState } from 'react';
import { Layers, RotateCcw, CheckCircle2, Eye } from 'lucide-react';
import { Flashcard } from '@/types/study';
import { useProgressStore } from './progress-store';
import { ReviewGrade, selectDueCardIds } from './spaced-repetition';

interface FlashcardSessionProps {
  /** Every card in the subject deck, in authoring order. */
  cards: Flashcard[];
}

/** Grade buttons shown after the answer is revealed, mapped to SM-2 grades. */
const GRADES: Array<{ grade: ReviewGrade; label: string; hint: string; className: string }> = [
  { grade: 1, label: 'Again', hint: 'Reset the interval', className: 'bg-rose-500/10 border-rose-500/40 text-rose-400 hover:bg-rose-500/20' },
  { grade: 3, label: 'Hard', hint: 'Recalled with difficulty', className: 'bg-amber-500/10 border-amber-500/40 text-amber-400 hover:bg-amber-500/20' },
  { grade: 4, label: 'Good', hint: 'Recalled after a pause', className: 'bg-blue-500/10 border-blue-500/40 text-blue-400 hover:bg-blue-500/20' },
  { grade: 5, label: 'Easy', hint: 'Instant recall', className: 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20' },
];

/**
 * Run a spaced-repetition review session over a subject's flashcard deck.
 *
 * The queue is rebuilt from persisted card states when the session starts, so a
 * returning student only sees cards that are actually due. Grading a card writes
 * straight through to the progress store, which reschedules it with SM-2.
 */
export const FlashcardSession: React.FC<FlashcardSessionProps> = ({ cards }) => {
  const cardStates = useProgressStore((state) => state.cardStates);
  const recordFlashcardReview = useProgressStore((state) => state.recordFlashcardReview);

  const [queue, setQueue] = useState<string[] | null>(null);
  const [position, setPosition] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  const cardsById = useMemo(
    () => new Map(cards.map((card) => [card.id, card])),
    [cards]
  );

  const dueCount = useMemo(
    () => selectDueCardIds(cards.map((card) => card.id), cardStates).length,
    [cards, cardStates]
  );

  const startSession = useCallback(
    (includeEverything: boolean) => {
      const ids = includeEverything
        ? cards.map((card) => card.id)
        : selectDueCardIds(cards.map((card) => card.id), cardStates);
      setQueue(ids);
      setPosition(0);
      setRevealed(false);
      setReviewed(0);
    },
    [cards, cardStates]
  );

  const grade = (value: ReviewGrade) => {
    if (!queue) return;
    const card = cardsById.get(queue[position]);
    if (!card) return;
    recordFlashcardReview(card.id, card.topicId, value);
    setReviewed((count) => count + 1);
    setRevealed(false);
    setPosition((index) => index + 1);
  };

  // Start screen — shown before a session and whenever the deck is empty.
  if (queue === null) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center mb-8">
          <Layers size={48} className="mx-auto text-blue-500 mb-4 opacity-80" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Ready for review?</h2>
          <p className="text-[var(--text-secondary)] mt-2">
            {dueCount > 0
              ? `${dueCount} of ${cards.length} cards are due right now.`
              : `Nothing is due. All ${cards.length} cards are scheduled for a later date.`}
          </p>
        </div>

        <div className="p-8 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl shadow-lg max-w-lg w-full text-center space-y-3">
          <p className="text-[var(--text-primary)] font-medium mb-4">
            Cards are scheduled with the SM-2 spaced-repetition algorithm. Grade yourself
            honestly — a low grade brings the card back sooner.
          </p>
          <button
            type="button"
            onClick={() => startSession(false)}
            disabled={dueCount === 0}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors w-full flex items-center justify-center gap-2"
          >
            <Layers size={20} /> Review {dueCount} due card{dueCount === 1 ? '' : 's'}
          </button>
          <button
            type="button"
            onClick={() => startSession(true)}
            className="px-8 py-3 bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--bg-hover)] transition-colors w-full flex items-center justify-center gap-2"
          >
            <RotateCcw size={18} /> Practise the whole deck
          </button>
        </div>
      </div>
    );
  }

  // Completion screen.
  if (position >= queue.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle2 size={56} className="text-emerald-500 mb-4" />
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Session complete</h2>
        <p className="text-[var(--text-secondary)] mt-2 max-w-md">
          You reviewed {reviewed} card{reviewed === 1 ? '' : 's'}. Each one has been rescheduled
          based on how well you recalled it.
        </p>
        <button
          type="button"
          onClick={() => setQueue(null)}
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to deck
        </button>
      </div>
    );
  }

  const card = cardsById.get(queue[position]);

  // Defensive: a persisted queue entry could reference a card removed from the deck.
  if (!card) {
    return (
      <div className="py-16 text-center text-[var(--text-secondary)]">
        <p>That card is no longer in this deck.</p>
        <button
          type="button"
          onClick={() => setPosition((index) => index + 1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Skip it
        </button>
      </div>
    );
  }

  const progressPercent = Math.round((position / queue.length) * 100);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex items-center justify-between mb-4 text-sm text-[var(--text-muted)]">
        <span>
          Card {position + 1} of {queue.length}
        </span>
        <span>{card.tags.join(' • ')}</span>
      </div>

      <div
        className="h-1.5 w-full rounded-full bg-[var(--bg-elevated)] mb-8 overflow-hidden"
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Session progress"
      >
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="p-8 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl shadow-lg min-h-[220px] flex flex-col justify-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
          Question
        </span>
        <p className="text-xl font-medium text-[var(--text-primary)] leading-relaxed">{card.front}</p>

        {revealed && (
          <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] animate-in fade-in slide-in-from-bottom-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-3 block">
              Answer
            </span>
            <p className="text-[var(--text-secondary)] leading-relaxed">{card.back}</p>
          </div>
        )}
      </div>

      {!revealed ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="mt-6 w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Eye size={20} /> Show answer
        </button>
      ) : (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {GRADES.map((option) => (
            <button
              key={option.grade}
              type="button"
              onClick={() => grade(option.grade)}
              className={`p-4 rounded-xl border-2 font-bold transition-colors ${option.className}`}
            >
              <span className="block">{option.label}</span>
              <span className="block text-xs font-normal opacity-70 mt-1">{option.hint}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
