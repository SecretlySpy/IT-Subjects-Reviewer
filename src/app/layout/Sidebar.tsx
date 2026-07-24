import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Book, Code, Smartphone } from 'lucide-react';
import { cn } from '@/components/ui/Button';
import { SubjectId } from '@/types/study';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { tokens } from '@/design-system/tokens';
import FocusLock from 'react-focus-lock';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentSubject?: SubjectId;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { id: 'networking2', label: 'Networking 2', icon: Book, path: '/subject/networking2', subjectId: 'networking2' as SubjectId, mastery: 45, accent: tokens.colors.subject.networking2 },
  { id: 'sia1', label: 'SIA 1', icon: Code, path: '/subject/sia1', subjectId: 'sia1' as SubjectId, mastery: 12, accent: tokens.colors.subject.sia1 },
  { id: 'mobile', label: 'Mobile Computing', icon: Smartphone, path: '/subject/mobile', subjectId: 'mobile' as SubjectId, mastery: 80, accent: tokens.colors.subject.mobile },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentSubject }) => {
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
               <span className="text-2xl font-bold text-text-primary">42%</span>
               <span className="text-sm text-accent-success pb-0.5">🔥 5 day streak</span>
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
