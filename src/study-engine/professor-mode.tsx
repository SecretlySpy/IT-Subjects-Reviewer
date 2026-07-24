import React from 'react';
import { ProfessorMode } from '@/types/study';
import { BookOpen, Target, Lightbulb, LayoutPanelTop } from 'lucide-react';
import { PacketSimulator } from '@/components/diagrams/PacketSimulator';
import { ArchitectureExplorer } from '@/components/diagrams/ArchitectureExplorer';
import { MobileTimeline } from '@/components/diagrams/MobileTimeline';

interface ProfessorModeRendererProps {
  data: ProfessorMode;
}

export const ProfessorModeRenderer: React.FC<ProfessorModeRendererProps> = ({ data }) => {
  const { eli5, deepDive, analogy, visualAidType, visualAidData } = data;

  const renderVisualAid = () => {
    if (!visualAidType) return null;

    if (visualAidType === 'diagram') {
      const type = (visualAidData as any)?.type;
      
      if (type === 'tcp-handshake') return <PacketSimulator />;
      if (type === 'eia-hub-spoke') return <ArchitectureExplorer />;
      if (type === 'android-lifecycle') return <MobileTimeline />;
      
      // Fallback
      return (
        <div className="flex items-center justify-center p-8 bg-[var(--bg-base)] rounded-lg border border-[var(--border-subtle)] mt-4">
          <div className="text-[var(--text-muted)] flex flex-col items-center gap-2">
            <LayoutPanelTop className="w-8 h-8" />
            <span>Diagram: {type || 'Static representation'}</span>
          </div>
        </div>
      );
    }
    
    if (visualAidType === 'table') {
      const headers = (visualAidData as any)?.headers || [];
      const rows = (visualAidData as any)?.rows || [];
      
      return (
        <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--border-subtle)]">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[var(--bg-elevated)] text-[var(--text-primary)]">
              <tr>
                {headers.map((h: string, i: number) => (
                  <th key={i} className="py-2 px-4 border-b border-[var(--border-subtle)]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row: string[], i: number) => (
                <tr key={i} className="border-b border-[var(--border-subtle)] hover:bg-[var(--bg-hover)] transition-colors">
                  {row.map((cell: string, j: number) => (
                    <td key={j} className="py-2 px-4 text-[var(--text-secondary)]">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ELI5 Section */}
      <section className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <div className="flex items-center gap-2 text-blue-400 mb-2 font-semibold">
          <Target className="w-5 h-5" />
          <h2>Explain Like I'm 5</h2>
        </div>
        <p className="text-[var(--text-primary)] leading-relaxed">{eli5}</p>
      </section>

      {/* Deep Dive Section */}
      <section>
        <div className="flex items-center gap-2 text-[var(--text-primary)] mb-2 font-semibold border-b border-[var(--border-subtle)] pb-2">
          <BookOpen className="w-5 h-5" />
          <h2>Academic Deep Dive</h2>
        </div>
        <p className="text-[var(--text-secondary)] leading-relaxed">{deepDive}</p>
      </section>

      {/* Analogy Section */}
      <section className="bg-[var(--bg-elevated)] p-4 rounded-lg border border-[var(--border-subtle)]">
        <div className="flex items-center gap-2 text-amber-400 mb-2 font-semibold">
          <Lightbulb className="w-5 h-5" />
          <h2>The Analogy</h2>
        </div>
        <p className="text-[var(--text-primary)] leading-relaxed italic">"{analogy}"</p>
      </section>

      {/* Visual Explorer Section */}
      {visualAidType && (
        <section>
          <div className="flex items-center gap-2 text-[var(--text-primary)] mb-2 font-semibold">
            <LayoutPanelTop className="w-5 h-5" />
            <h2>System Explorer</h2>
          </div>
          {renderVisualAid()}
        </section>
      )}
    </div>
  );
};
