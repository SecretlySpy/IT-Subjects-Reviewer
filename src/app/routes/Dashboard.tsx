import React, { useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, BookOpen, Clock, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { tokens } from '@/design-system/tokens';
import { subjectsData } from '@/subjects';
import { computeSubjectMastery, useProgressStore } from '@/study-engine/progress-store';
import { MasteryLevel, SubjectId } from '@/types/study';

/** Icon per subject, kept beside the data so a new subject only needs one entry. */
const SUBJECT_ICONS: Record<SubjectId, React.ElementType> = {
  networking2: BookOpen,
  sia1: Activity,
  mobile: Clock,
};

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const streak = useProgressStore((state) => state.streak);
  const quizHistory = useProgressStore((state) => state.quizHistory);
  const topicMastery = useProgressStore((state) => state.topicMastery);

  // Real per-subject figures derived from recorded activity, never hard-coded.
  const subjects = useMemo(
    () =>
      Object.values(subjectsData).map((subject) => {
        const topicIds = subject.topics.map((topic) => topic.id);
        const mastery = computeSubjectMastery(topicIds, topicMastery);
        const remaining = topicIds.filter(
          (id) => (topicMastery[id] ?? 'new') !== 'mastered'
        ).length;
        return { subject, mastery, remaining };
      }),
    [topicMastery]
  );

  // Suggest the least-mastered topics so the recommendation reflects real progress.
  const recommended = useMemo(() => {
    const rank: Record<MasteryLevel, number> = { new: 0, learning: 1, reviewing: 2, mastered: 3 };
    return Object.values(subjectsData)
      .flatMap((subject) =>
        subject.topics.map((topic) => ({
          topic,
          subjectId: subject.subjectMeta.id,
          subjectName: subject.subjectMeta.shortTitle,
          level: (topicMastery[topic.id] ?? 'new') as MasteryLevel,
        }))
      )
      .sort((a, b) => rank[a.level] - rank[b.level] || a.topic.order - b.topic.order)
      .slice(0, 2);
  }, [topicMastery]);

  const overall = useMemo(() => {
    if (!subjects.length) return 0;
    return Math.round(
      subjects.reduce((sum, entry) => sum + entry.mastery, 0) / subjects.length
    );
  }, [subjects]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Welcome + current streak */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Welcome back!</h1>
          <p className="text-text-secondary flex flex-wrap items-center gap-2">
            <span>You're on a</span>
            <Badge variant="success" className="font-bold">🔥 {streak} day streak</Badge>
            <span>and {overall}% through your subjects.</span>
          </p>
        </div>
        <Button
          size="lg"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={() => navigate(`/subject/${recommended[0]?.subjectId ?? 'sia1'}`)}
        >
          Continue studying
        </Button>
      </section>

      {/* 2. Subject mastery cards */}
      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Your Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map(({ subject, mastery, remaining }) => {
            const Icon = SUBJECT_ICONS[subject.subjectMeta.id];
            const accent = subject.subjectMeta.accent;
            return (
              <Card
                key={subject.subjectMeta.id}
                interactive
                elevated
                className="p-5 flex flex-col"
                onClick={() => navigate(`/subject/${subject.subjectMeta.id}`)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
                    style={{ backgroundColor: `${accent}20`, color: accent }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <ProgressRing
                    value={mastery}
                    size={50}
                    strokeWidth={4}
                    color={accent}
                    trackColor={tokens.colors.border.subtle}
                  />
                </div>
                <h3 className="text-lg font-bold text-text-primary">{subject.subjectMeta.shortTitle}</h3>
                <p className="text-sm text-text-secondary mt-1">
                  {mastery}% mastery • {remaining} topic{remaining === 1 ? '' : 's'} left
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. Recommended next topics */}
      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Recommended Next Topics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {recommended.map(({ topic, subjectId, subjectName, level }) => (
            <Card
              key={topic.id}
              interactive
              className="p-4 flex items-center gap-4"
              onClick={() => navigate(`/subject/${subjectId}`)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant={level}>{level}</Badge>
                  <span className="text-xs text-text-tertiary">{subjectName}</span>
                </div>
                <h4 className="font-medium text-text-primary">{topic.title}</h4>
                <p className="text-sm text-text-secondary truncate mt-1">{topic.professorMode.eli5}</p>
              </div>
              <Button variant="secondary" size="sm">
                {level === 'new' ? 'Start' : 'Review'}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Recent activity feed */}
      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Recent Activity</h2>
        {quizHistory.length === 0 ? (
          <Card className="p-8 text-center flex flex-col items-center justify-center border-dashed">
            <Activity className="w-12 h-12 text-border-strong mb-3" />
            <h3 className="text-lg font-medium text-text-primary">No recent activity</h3>
            <p className="text-sm text-text-secondary mt-1 max-w-sm">
              You haven't completed any review sessions yet. Start a topic to see your activity history here.
            </p>
          </Card>
        ) : (
          <div className="flex flex-col gap-3">
            {quizHistory.slice(-3).reverse().map((hist, i) => (
              <Card key={`${hist.questionId}-${hist.timestamp}-${i}`} className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-text-primary font-medium">Question Practice</h4>
                  <p className="text-xs text-text-secondary">{new Date(hist.timestamp).toLocaleString()}</p>
                </div>
                <Badge variant={hist.correct ? "success" : "danger"}>
                  {hist.correct ? "Correct" : "Incorrect"}
                </Badge>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
