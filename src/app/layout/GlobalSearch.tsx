import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen } from 'lucide-react';
import { subjectsData } from '@/subjects';
import { GlossaryTerm } from '@/types/study';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Aggregate all glossary terms
  const allTerms: (GlossaryTerm & { subjectName: string })[] = [];
  Object.values(subjectsData).forEach(subject => {
    subject.glossary.forEach(term => {
      allTerms.push({ ...term, subjectName: subject.subjectMeta.shortTitle });
    });
  });

  const filteredTerms = query.trim() === '' 
    ? [] 
    : allTerms.filter(t => 
        t.term.toLowerCase().includes(query.toLowerCase()) || 
        t.definition.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[var(--bg-elevated)] w-full max-w-2xl rounded-xl border border-[var(--border-subtle)] shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
        
        {/* Search Input Area */}
        <div className="flex items-center p-4 border-b border-[var(--border-subtle)]">
          <Search className="w-5 h-5 text-[var(--text-muted)] mr-3" />
          <input 
            autoFocus
            type="text" 
            placeholder="Search glossary terms across all subjects..."
            className="flex-1 bg-transparent text-[var(--text-primary)] outline-none text-lg placeholder:text-[var(--text-muted)]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 flex-1">
          {query.trim() === '' ? (
            <div className="text-center py-12 text-[var(--text-muted)] flex flex-col items-center">
              <BookOpen className="w-12 h-12 mb-4 opacity-20" />
              <p>Type to search the global dictionary.</p>
            </div>
          ) : filteredTerms.length === 0 ? (
            <div className="text-center py-12 text-[var(--text-muted)]">
              <p>No results found for "{query}".</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTerms.map(term => (
                <div key={term.id} className="p-4 bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-lg hover:border-blue-500/50 transition-colors">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-lg font-bold text-[var(--text-primary)] text-blue-400">{term.term}</h4>
                    <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">{term.subjectName}</span>
                  </div>
                  <p className="text-[var(--text-secondary)]">{term.definition}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
