import React from 'react';
import { LessonBlock, ProfessorMode, SourceReference } from '@/types/study';
import { BookOpen, ExternalLink, Lightbulb, ListChecks, LayoutPanelTop, ShieldAlert, Target, TriangleAlert } from 'lucide-react';
import { PacketSimulator } from '@/components/diagrams/PacketSimulator';
import { ArchitectureExplorer } from '@/components/diagrams/ArchitectureExplorer';
import { MobileTimeline } from '@/components/diagrams/MobileTimeline';
import { SafeFormLab } from '@/components/diagrams/SafeFormLab';
import { OspfAreasDiagram, SensorFusionDiagram, ThumbZoneDiagram } from '@/components/diagrams/TopicVisuals';
import {
  PathChainDiagram,
  LayerStackDiagram,
  TreeHierarchyDiagram,
  FieldLayoutDiagram,
  WeightedGraphDiagram,
  ActorFlowDiagram,
  RadioRangeDiagram,
} from '@/components/diagrams/ConceptDiagrams';

interface ProfessorModeRendererProps {
  data: ProfessorMode;
  learningObjectives?: string[];
  lessonBlocks?: LessonBlock[];
  sources?: SourceReference[];
}

const calloutStyles = {
  note: 'border-blue-500/40 bg-blue-500/10',
  warning: 'border-amber-500/40 bg-amber-500/10',
  security: 'border-rose-500/40 bg-rose-500/10',
};

export const ProfessorModeRenderer: React.FC<ProfessorModeRendererProps> = ({
  data,
  learningObjectives = [],
  lessonBlocks = [],
  sources = [],
}) => {
  const { eli5, deepDive, analogy, visualAidType, visualAidData } = data;

  const renderVisualAid = () => {
    if (!visualAidType) return null;

    if (visualAidType === 'diagram') {
      const type = visualAidData.type;
      
      if (type === 'tcp-handshake') return <PacketSimulator steps={visualAidData.steps} />;
      if (type === 'ospf-areas') return <OspfAreasDiagram areas={visualAidData.areas} />;
      if (type === 'eia-hub-spoke') return <ArchitectureExplorer nodes={visualAidData.nodes} />;
      if (type === 'android-lifecycle') return <MobileTimeline nodes={visualAidData.nodes} />;
      if (type === 'sensor-fusion') return <SensorFusionDiagram sensors={visualAidData.sensors} />;
      if (type === 'thumb-zone') return <ThumbZoneDiagram zones={visualAidData.zones} />;

      // Generic, data-driven diagrams shared across the Networking 2 syllabus.
      // Each carries its own title/description so one component serves many topics.
      const frame = {
        title: visualAidData.title ?? 'Topic diagram',
        description: visualAidData.description ?? '',
      };
      if (type === 'path-chain') return <PathChainDiagram {...frame} chain={visualAidData.chain} />;
      if (type === 'layer-stack') return <LayerStackDiagram {...frame} layers={visualAidData.layers} />;
      if (type === 'tree-hierarchy') return <TreeHierarchyDiagram {...frame} root={visualAidData.root} levels={visualAidData.levels} />;
      if (type === 'field-layout') return <FieldLayoutDiagram {...frame} fields={visualAidData.fields} />;
      if (type === 'weighted-graph') return <WeightedGraphDiagram {...frame} graphNodes={visualAidData.graphNodes} edges={visualAidData.edges} />;
      if (type === 'actor-flow') return <ActorFlowDiagram {...frame} actors={visualAidData.actors} messages={visualAidData.messages} />;
      if (type === 'radio-range') return <RadioRangeDiagram {...frame} stations={visualAidData.stations} />;
      
      // Fallback
      return (
        <div className="flex items-center justify-center p-8 bg-[var(--bg-base)] rounded-lg border border-[var(--border-subtle)] mt-4">
          <div className="text-[var(--text-muted)] flex flex-col items-center gap-2">
            <LayoutPanelTop className="w-8 h-8" />
            <span>Visual aid unavailable for this topic.</span>
          </div>
        </div>
      );
    }
    
    if (visualAidType === 'table') {
      const headers = visualAidData.headers || [];
      const rows = visualAidData.rows || [];
      
      return (
        <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--border-subtle)]" tabIndex={0} aria-label="Scrollable topic comparison table">
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">Comparison of key concepts in this topic</caption>
            <thead className="bg-[var(--bg-elevated)] text-[var(--text-primary)]">
              <tr>
                {headers.map((h: string, i: number) => (
                  <th key={i} scope="col" className="py-2 px-4 border-b border-[var(--border-subtle)]">{h}</th>
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
    if (visualAidType === 'interactive' && visualAidData.type === 'safe-form-lab') {
      return <SafeFormLab />;
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-6">
      {learningObjectives.length > 0 && (
        <section className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4">
          <div className="mb-3 flex items-center gap-2 font-semibold text-[var(--text-primary)]">
            <ListChecks className="h-5 w-5 text-emerald-400" />
            <h2>Learning objectives</h2>
          </div>
          <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
            {learningObjectives.map((objective) => <li key={objective}>{objective}</li>)}
          </ul>
        </section>
      )}

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

      {lessonBlocks.map((block, index) => {
        const key = `${block.kind}-${block.title}-${index}`;
        if (block.kind === 'paragraph') {
          return (
            <section key={key} className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">{block.title}</h2>
              <p className="leading-relaxed text-[var(--text-secondary)]">{block.text}</p>
            </section>
          );
        }
        if (block.kind === 'list') {
          return (
            <section key={key} className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">{block.title}</h2>
              <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
                {block.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          );
        }
        if (block.kind === 'code') {
          return (
            <section key={key} className="overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[#080c12]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <h2 className="font-semibold text-slate-100">{block.title}</h2>
                <span className="rounded bg-white/10 px-2 py-1 text-xs uppercase tracking-wide text-slate-300">{block.language}</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm leading-6 text-slate-200" tabIndex={0} aria-label={`${block.title} code example`}>
                <code>{block.code}</code>
              </pre>
              <p className="border-t border-white/10 px-4 py-3 text-sm text-slate-400">{block.caption}</p>
            </section>
          );
        }
        const CalloutIcon = block.tone === 'security' ? ShieldAlert : block.tone === 'warning' ? TriangleAlert : Lightbulb;
        return (
          <section key={key} className={`rounded-lg border p-4 ${calloutStyles[block.tone]}`}>
            <div className="mb-2 flex items-center gap-2 font-semibold text-[var(--text-primary)]">
              <CalloutIcon className="h-5 w-5" />
              <h2>{block.title}</h2>
            </div>
            <p className="leading-relaxed text-[var(--text-secondary)]">{block.text}</p>
          </section>
        );
      })}

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

      {sources.length > 0 && (
        <section className="border-t border-[var(--border-subtle)] pt-5">
          <h2 className="mb-3 font-semibold text-[var(--text-primary)]">Sources and further reading</h2>
          <ul className="space-y-2">
            {sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md text-blue-400 underline decoration-blue-400/40 underline-offset-4 hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  <span>{source.publisher}: {source.title}</span>
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};
