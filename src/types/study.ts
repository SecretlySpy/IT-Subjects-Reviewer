export type MasteryLevel = "new" | "learning" | "reviewing" | "mastered";

export type SubjectId = "networking2" | "sia1" | "mobile";

export interface ProfessorMode {
  eli5: string;               // max ~80 words
  deepDive: string;           // academic, 250–500 words, technical terms defined
  analogy: string;            // real-world, memorable
  visualAidType: "diagram" | "flowchart" | "table" | "interactive" | "svg";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visualAidData: Record<string, any>; // structure depends on type
}

export interface Topic {
  id: string;                 // e.g. "networking2-tcp-reliability"
  subjectId: SubjectId;
  title: string;
  order: number;
  estimatedMinutes: number;
  professorMode: ProfessorMode;
  relatedTermIds: string[];
  tags: string[];
}

export interface Flashcard {
  id: string;
  topicId: string;
  front: string;
  back: string;
  tags: string[];
  // Spaced-repetition runtime fields (persisted)
  easeFactor: number;         // default 2.5
  interval: number;           // days
  repetitions: number;
  nextReview: number;         // Unix timestamp
  masteryLevel: MasteryLevel;
}

export type QuestionType = "mcq" | "multi" | "scenario";

export interface Question {
  id: string;
  topicId: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  type: QuestionType;
  stem: string;
  options: string[];
  correct: number[];          // indices
  explanation: string;
  adaptiveWeight: number;     // higher = more likely when struggling
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  topicIds: string[];
}

export interface SubjectMeta {
  id: SubjectId;
  title: string;
  shortTitle: string;
  description: string;
  accent: string;             // from tokens.colors.subject
  topicCount: number;
  estimatedHours: number;
}

export interface ProgressSnapshot {
  version: 1;
  lastUpdated: number;
  streak: number;
  lastStudyDate: string;      // YYYY-MM-DD, empty until the first study session
  topicMastery: Record<string, MasteryLevel>;
  cardStates: Record<string, {
    easeFactor: number;
    interval: number;
    repetitions: number;
    nextReview: number;
    masteryLevel: MasteryLevel;
  }>;
  /** cardId -> topicId, recorded on review so mastery can be aggregated per topic. */
  cardTopics: Record<string, string>;
  quizHistory: Array<{
    questionId: string;
    correct: boolean;
    timestamp: number;
    difficulty: number;
    /** Optional so snapshots written before this field was added still load. */
    topicId?: string;
  }>;
  studiedTopicIds: string[];
}
