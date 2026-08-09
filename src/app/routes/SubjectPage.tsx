import { useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { subjectsData } from '@/subjects';
import { ProfessorModeRenderer } from '@/study-engine/professor-mode';
import { FlashcardSession } from '@/study-engine/flashcard-session';
import { BookOpen, HelpCircle, Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { useProgressStore } from '@/study-engine/progress-store';
import { selectNextQuestion } from '@/study-engine/adaptive-quiz';
import { Question } from '@/types/study';

export function SubjectPage() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'learn' | 'flashcards' | 'quiz'>('learn');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  
  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<boolean | null>(null);
  
  const recordQuizAnswer = useProgressStore((state) => state.recordQuizAnswer);
  const quizHistory = useProgressStore((state) => state.quizHistory);

  const data = subjectsData[subjectId as keyof typeof subjectsData];
  const questions = data?.questions;

  const nextQuizQuestion = useCallback(() => {
    setSelectedOption(null);
    setQuizFeedback(null);
    setCurrentQuestion(questions ? selectNextQuestion(questions, quizHistory) : null);
  }, [questions, quizHistory]);

  // Load the first question the moment the quiz tab becomes visible.
  // Every hook must run before the not-found branch, or the hook order would
  // change when the route moves between a valid and an invalid subject id.
  useEffect(() => {
    if (activeTab === 'quiz' && !currentQuestion) {
      nextQuizQuestion();
    }
  }, [activeTab, currentQuestion, nextQuizQuestion]);

  // Reset per-subject view state when the route switches to a different subject.
  useEffect(() => {
    setActiveTab('learn');
    setActiveTopicIndex(0);
    setCurrentQuestion(null);
    setSelectedOption(null);
    setQuizFeedback(null);
  }, [subjectId]);

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-[var(--text-secondary)]">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Subject Not Found</h2>
        <p>The subject you are looking for does not exist or has not been unlocked.</p>
        <button onClick={() => navigate('/')} className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Return to Dashboard
        </button>
      </div>
    );
  }

  const { subjectMeta, topics, flashcards } = data;
  const currentTopic = topics[activeTopicIndex];

  const handleQuizSubmit = () => {
    if (selectedOption === null || !currentQuestion) return;

    const isCorrect = currentQuestion.correct.includes(selectedOption);
    setQuizFeedback(isCorrect);

    recordQuizAnswer(
      currentQuestion.id,
      currentQuestion.topicId,
      isCorrect,
      currentQuestion.difficulty
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500 pb-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 p-6 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)]">
        <div>
          <span className="text-sm font-semibold tracking-wide" style={{ color: subjectMeta.accent }}>{subjectMeta.shortTitle}</span>
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mt-1">{subjectMeta.title}</h1>
          <p className="text-[var(--text-secondary)] mt-2 max-w-2xl">{subjectMeta.description}</p>
        </div>
        <div className="flex gap-2">
          <div className="text-center p-3 bg-[var(--bg-base)] rounded-lg border border-[var(--border-subtle)] min-w-[80px]">
            <span className="block text-2xl font-bold text-[var(--text-primary)]">{subjectMeta.topicCount}</span>
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Topics</span>
          </div>
          <div className="text-center p-3 bg-[var(--bg-base)] rounded-lg border border-[var(--border-subtle)] min-w-[80px]">
            <span className="block text-2xl font-bold text-[var(--text-primary)]">{flashcards.length}</span>
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Cards</span>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-[var(--border-subtle)]">
        <button 
          onClick={() => setActiveTab('learn')}
          className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors border-b-2 ${activeTab === 'learn' ? 'border-blue-500 text-blue-400' : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          <BookOpen size={18} /> Learn
        </button>
        <button 
          onClick={() => setActiveTab('flashcards')}
          className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors border-b-2 ${activeTab === 'flashcards' ? 'border-blue-500 text-blue-400' : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          <Layers size={18} /> Flashcards
        </button>
        <button 
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors border-b-2 ${activeTab === 'quiz' ? 'border-blue-500 text-blue-400' : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
        >
          <HelpCircle size={18} /> Adaptive Quiz
        </button>
      </div>

      {/* Content Area */}
      <div className="mt-6">
        
        {/* LEARN TAB */}
        {activeTab === 'learn' && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Topics List */}
            <div className="w-full lg:w-1/4 space-y-2">
              <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4 px-2">Syllabus</h3>
              {topics.map((topic, idx) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopicIndex(idx)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between group
                    ${activeTopicIndex === idx 
                      ? 'bg-[var(--bg-elevated)] border-l-4 border-blue-500 shadow-sm' 
                      : 'hover:bg-[var(--bg-hover)] text-[var(--text-secondary)]'
                    }
                  `}
                >
                  <span className={`font-medium ${activeTopicIndex === idx ? 'text-[var(--text-primary)]' : ''}`}>
                    {idx + 1}. {topic.title}
                  </span>
                  {activeTopicIndex === idx && <ChevronRight size={16} className="text-blue-500" />}
                </button>
              ))}
            </div>

            {/* Main Lesson Content */}
            <div className="w-full lg:w-3/4">
              <div className="mb-6 flex items-baseline gap-4">
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">{currentTopic.title}</h2>
                <span className="text-sm text-[var(--text-muted)]">{currentTopic.estimatedMinutes} mins</span>
              </div>
              <ProfessorModeRenderer
                data={currentTopic.professorMode}
                learningObjectives={currentTopic.learningObjectives}
                lessonBlocks={currentTopic.lessonBlocks}
                sources={currentTopic.sources}
              />
              
              <div className="mt-12 flex justify-end">
                <button 
                  onClick={() => {
                    if (activeTopicIndex < topics.length - 1) {
                      setActiveTopicIndex(activeTopicIndex + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      setActiveTab('flashcards');
                    }
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {activeTopicIndex < topics.length - 1 ? 'Next Topic' : 'Start Flashcards'} <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FLASHCARDS TAB */}
        {activeTab === 'flashcards' && <FlashcardSession cards={flashcards} />}

        {/* QUIZ TAB */}
        {activeTab === 'quiz' && !currentQuestion && (
          <div className="py-16 text-center text-[var(--text-secondary)]">
            <HelpCircle size={40} className="mx-auto mb-4 opacity-40" />
            <p>No practice questions are available for this subject yet.</p>
          </div>
        )}

        {activeTab === 'quiz' && currentQuestion && (
          <div className="max-w-3xl mx-auto py-8">
            <div className="mb-8 flex justify-between items-center">
              <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider">
                Level {currentQuestion.difficulty} Challenge
              </span>
              <span className="text-[var(--text-muted)] text-sm">Adaptive Engine Active</span>
            </div>

            <h2 className="text-2xl font-bold text-[var(--text-primary)] leading-relaxed mb-8">
              {currentQuestion.stem}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOption = currentQuestion.correct.includes(idx);
                let stateClass = 'border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:border-blue-500/50 hover:bg-[var(--bg-hover)]';
                
                if (quizFeedback !== null) {
                  if (isCorrectOption) {
                    stateClass = 'border-emerald-500 bg-emerald-500/10 text-emerald-400';
                  } else if (isSelected && !isCorrectOption) {
                    stateClass = 'border-rose-500 bg-rose-500/10 text-rose-400';
                  } else {
                    stateClass = 'border-[var(--border-subtle)] bg-[var(--bg-base)] opacity-50';
                  }
                } else if (isSelected) {
                  stateClass = 'border-blue-500 bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/50';
                }

                return (
                  <button
                    key={idx}
                    disabled={quizFeedback !== null}
                    onClick={() => setSelectedOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-[var(--text-primary)] ${stateClass}`}
                  >
                    <div className="flex gap-4">
                      <span className="font-bold opacity-50">{String.fromCharCode(65 + idx)}.</span>
                      <span>{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {quizFeedback === null ? (
              <button 
                onClick={handleQuizSubmit}
                disabled={selectedOption === null}
                className="mt-8 w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Submit Answer
              </button>
            ) : (
              <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
                <div className={`p-6 rounded-xl border ${quizFeedback ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'}`}>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {quizFeedback ? <CheckCircle2 size={24} /> : <HelpCircle size={24} />}
                    {quizFeedback ? 'Excellent!' : 'Not quite.'}
                  </h3>
                  <p className="text-[var(--text-primary)] opacity-90 leading-relaxed mb-6">
                    {currentQuestion.explanation}
                  </p>
                  <button 
                    onClick={nextQuizQuestion}
                    className="px-6 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--bg-hover)] transition-colors w-full"
                  >
                    Next Question
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
