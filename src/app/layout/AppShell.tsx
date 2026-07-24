import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { SubjectId } from '@/types/study';
import { useLocation } from 'react-router-dom';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Keyboard shortcut Cmd/Ctrl + B
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Determine current subject from path for sidebar highlighting
  const currentSubject = location.pathname.startsWith('/subject/') 
    ? (location.pathname.split('/')[2] as SubjectId)
    : undefined;

  // Determine title from path
  const getTitle = () => {
    if (location.pathname === '/') return 'Dashboard';
    if (location.pathname === '/design-system') return 'Design System';
    if (currentSubject === 'networking2') return 'Networking 2';
    if (currentSubject === 'sia1') return 'Systems Integration and Architecture 1';
    if (currentSubject === 'mobile') return 'Mobile Computing';
    return 'IT Reviewer';
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-primary flex">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} currentSubject={currentSubject} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar onMenuClick={toggleSidebar} title={getTitle()} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-content mx-auto p-4 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
