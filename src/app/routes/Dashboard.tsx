import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, BookOpen, Clock, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { tokens } from '@/design-system/tokens';
import { useProgressStore } from '@/study-engine/progress-store';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const streak = useProgressStore(state => state.streak);
  const quizHistory = useProgressStore(state => state.quizHistory);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Welcome + current streak */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Welcome back!</h1>
          <p className="text-text-secondary flex items-center gap-2">
            <span>You're on a</span>
            <Badge variant="success" className="font-bold">🔥 {streak} day streak</Badge>
            <span>Keep it up!</span>
          </p>
        </div>
        <Button size="lg" icon={<ArrowRight className="w-5 h-5" />} onClick={() => navigate('/subject/mobile')}>
          Continue Mobile Computing
        </Button>
      </section>

      {/* 2. Three subject mastery cards */}
      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Your Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Networking 2 */}
          <Card interactive elevated className="p-5 flex flex-col" onClick={() => navigate('/subject/networking2')}>
            <div className="flex justify-between items-start mb-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
                style={{ backgroundColor: `${tokens.colors.subject.networking2}20`, color: tokens.colors.subject.networking2 }}
              >
                <BookOpen className="w-6 h-6" />
              </div>
              <ProgressRing value={45} size={50} strokeWidth={4} color={tokens.colors.subject.networking2} trackColor={tokens.colors.border.subtle} />
            </div>
            <h3 className="text-lg font-bold text-text-primary">Networking 2</h3>
            <p className="text-sm text-text-secondary mt-1">45% Mastery • 12 topics left</p>
          </Card>

          {/* SIA 1 */}
          <Card interactive elevated className="p-5 flex flex-col" onClick={() => navigate('/subject/sia1')}>
            <div className="flex justify-between items-start mb-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
                style={{ backgroundColor: `${tokens.colors.subject.sia1}20`, color: tokens.colors.subject.sia1 }}
              >
                <Activity className="w-6 h-6" />
              </div>
              <ProgressRing value={12} size={50} strokeWidth={4} color={tokens.colors.subject.sia1} trackColor={tokens.colors.border.subtle} />
            </div>
            <h3 className="text-lg font-bold text-text-primary">Systems Integration 1</h3>
            <p className="text-sm text-text-secondary mt-1">12% Mastery • 34 topics left</p>
          </Card>

          {/* Mobile Computing */}
          <Card interactive elevated className="p-5 flex flex-col" onClick={() => navigate('/subject/mobile')}>
            <div className="flex justify-between items-start mb-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
                style={{ backgroundColor: `${tokens.colors.subject.mobile}20`, color: tokens.colors.subject.mobile }}
              >
                <Clock className="w-6 h-6" />
              </div>
              <ProgressRing value={80} size={50} strokeWidth={4} color={tokens.colors.subject.mobile} trackColor={tokens.colors.border.subtle} />
            </div>
            <h3 className="text-lg font-bold text-text-primary">Mobile Computing</h3>
            <p className="text-sm text-text-secondary mt-1">80% Mastery • 2 topics left</p>
          </Card>

        </div>
      </section>

      {/* 3. Recommended next topics */}
      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Recommended Next Topics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card interactive className="p-4 flex items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="learning">Learning</Badge>
                <span className="text-xs text-text-tertiary">Networking 2</span>
              </div>
              <h4 className="font-medium text-text-primary">TCP Reliability Mechanisms</h4>
              <p className="text-sm text-text-secondary truncate mt-1">Review acknowledgments and retransmissions.</p>
            </div>
            <Button variant="secondary" size="sm">Review</Button>
          </Card>
          <Card interactive className="p-4 flex items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="new">New</Badge>
                <span className="text-xs text-text-tertiary">Mobile Computing</span>
              </div>
              <h4 className="font-medium text-text-primary">Android Activity Lifecycle</h4>
              <p className="text-sm text-text-secondary truncate mt-1">Start learning about onCreate, onStart, etc.</p>
            </div>
            <Button variant="secondary" size="sm">Start</Button>
          </Card>
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
              <Card key={i} className="p-4 flex items-center justify-between">
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
