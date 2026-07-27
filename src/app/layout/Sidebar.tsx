import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Book, Code, Smartphone } from 'lucide-react';
import { cn } from '@/components/ui/Button';
import { SubjectId } from '@/types/study';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { tokens } from '@/design-system/tokens';
import { subjectsData } from '@/subjects';
import { computeSubjectMastery, useProgressStore } from '@/study-engine/progress-store';
import FocusLock from 'react-focus-lock';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentSubject?: SubjectId;
}

/** Icon per subject id, kept separate from the content so data stays the source of truth. */
const SUBJECT_ICONS: Record<SubjectId, React.ElementType> = {
  networking2: Book,
  sia1: Code,
  mobile: Smartphone,
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentSubject }) => {
  const streak = useProgressStore((state) => state.streak);
  const topicMastery = useProgressStore((state) => state.topicMastery);

  // Mastery rings and the overall figure are derived from recorded study activity.
  const navItems = useMemo(() => {
    const subjectItems = Object.values(subjectsData).map((subject) => ({
      id: subject.subjectMeta.id as string,
      label: subject.subjectMeta.shortTitle,
      icon: SUBJECT_ICONS[subject.subjectMeta.id],
      path: `/subject/${subject.subjectMeta.id}`,
      subjectId: subject.subjectMeta.id,
      accent: subject.subjectMeta.accent,
      mastery: computeSubjectMastery(
        subject.topics.map((topic) => topic.id),
        topicMastery
      ),
    }));
    return [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/', subjectId: undefined, accent: undefined, mastery: 0 },
      ...subjectItems,
    ];
  }, [topicMastery]);

  const overallProgress = useMemo(() => {
    const subjectItems = navItems.filter((item) => item.subjectId);
    if (!subjectItems.length) return 0;
    return Math.round(
      subjectItems.reduce((sum, item) => sum + item.mastery, 0) / subjectItems.length
    );
  }, [navItems]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <FocusLock disabled={!isOpen} className="contents">
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-50 flex flex-col w-sidebar bg-bg-elevated border-r border-border-default transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:h-screen',
            isOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
        <div className="p-6">
          <h1 className="text-xl font-bold text-text-primary tracking-tight">IT Reviewer</h1>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.subjectId ? currentSubject === item.subjectId : currentSubject === undefined && item.id === 'dashboard';
            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => onClose()}
                className={({ isActive: routerActive }) => cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md transition-colors relative group',
                  (routerActive || isActive) ? 'bg-bg-hover text-text-primary' : 'text-text-secondary hover:bg-bg-hover hover:text-text-primary'
                )}
              >
                {/* Accent border for active subject */}
                {isActive && item.subjectId && (
                  <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                    style={{ backgroundColor: item.accent }}
                  />
                )}
                
                <item.icon className={cn("w-5 h-5", isActive ? "text-accent-primary" : "text-text-tertiary group-hover:text-text-secondary")} />
                <span className="font-medium flex-1">{item.label}</span>
                
                {/* Mastery Ring */}
                {item.subjectId && (
                   <ProgressRing 
                     value={item.mastery} 
                     size={24} 
                     strokeWidth={2.5} 
                     color={item.accent} 
                     trackColor={tokens.colors.border.subtle} 
                   />
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 mt-auto">
          <div className="p-4 rounded-lg bg-bg-base border border-border-subtle">
             <div className="text-xs text-text-tertiary font-medium mb-1">Overall Progress</div>
             <div className="flex items-end gap-2">
               <span className="text-2xl font-bold text-text-primary">{overallProgress}%</span>
               <span className="text-sm text-accent-success pb-0.5">🔥 {streak} day streak</span>
             </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-border-default text-xs text-text-tertiary flex justify-between items-center">
          <span>v1.0.0</span>
          <span className="flex items-center gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-accent-success"></div>
             Offline ready
          </span>
        </div>
        </aside>
      </FocusLock>
    </>
  );
};
