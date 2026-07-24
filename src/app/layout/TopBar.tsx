import React, { useState } from 'react';
import { Menu, Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GlobalSearch } from './GlobalSearch';

interface TopBarProps {
  onMenuClick: () => void;
  title: string;
}

export const TopBar: React.FC<TopBarProps> = ({ onMenuClick, title }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="h-[var(--h-header)] bg-[var(--bg-base)]/80 backdrop-blur-md border-b border-[var(--border-default)] sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4 flex-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="lg:hidden p-2 -ml-2" 
            onClick={onMenuClick}
            aria-label="Toggle Menu"
          >
            <Menu className="w-5 h-5 text-[var(--text-primary)]" />
          </Button>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] truncate">{title}</h2>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="hidden md:block w-64" onClick={() => setSearchOpen(true)}>
            <div className="relative flex items-center w-full h-10 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-2 text-sm text-[var(--text-muted)] cursor-pointer hover:border-blue-500/50 transition-colors">
              <Search className="w-4 h-4 mr-2" />
              <span>Search glossary (Ctrl+K)</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="p-2 md:hidden" onClick={() => setSearchOpen(true)}>
            <Search className="w-5 h-5 text-[var(--text-secondary)]" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2" aria-label="Notifications">
            <Bell className="w-5 h-5 text-[var(--text-secondary)]" />
          </Button>
        </div>
      </header>

      <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
