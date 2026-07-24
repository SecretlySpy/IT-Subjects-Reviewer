import { useState } from 'react';
import { Layers, Database, Monitor, ShieldAlert } from 'lucide-react';

export function ArchitectureExplorer() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      id: 0,
      name: 'Presentation Layer',
      icon: <Monitor size={20} />,
      color: 'border-blue-500/50 bg-blue-500/10 text-blue-400',
      desc: 'Handles UI and user interaction. Connects to the business layer via APIs.',
      tech: ['React', 'Vue', 'Mobile Apps']
    },
    {
      id: 1,
      name: 'Business Logic Layer',
      icon: <Layers size={20} />,
      color: 'border-purple-500/50 bg-purple-500/10 text-purple-400',
      desc: 'Contains the core rules, computations, and domain logic of the application.',
      tech: ['Node.js', 'Spring Boot', 'Services']
    },
    {
      id: 2,
      name: 'Data Access Layer',
      icon: <Database size={20} />,
      color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400',
      desc: 'Manages all database interactions, ORMs, and persistence mechanisms.',
      tech: ['PostgreSQL', 'Prisma', 'MongoDB']
    }
  ];

  return (
    <div className="p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl my-4">
      <h4 className="text-[var(--text-primary)] font-semibold text-lg mb-2">Layered Architecture Explorer</h4>
      <p className="text-[var(--text-secondary)] text-sm mb-6">Hover or tap on a layer to inspect its responsibilities and isolation boundaries.</p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Visual Stack */}
        <div className="flex flex-col gap-3 w-full md:w-1/2 perspective-1000">
          {layers.map((layer) => (
            <div 
              key={layer.id}
              onMouseEnter={() => setActiveLayer(layer.id)}
              onMouseLeave={() => setActiveLayer(null)}
              className={`
                relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
                flex items-center gap-4
                ${layer.color}
                ${activeLayer === layer.id ? 'translate-x-2 shadow-lg brightness-125' : 'opacity-80 hover:opacity-100'}
              `}
            >
              {layer.icon}
              <span className="font-medium tracking-wide">{layer.name}</span>
            </div>
          ))}
        </div>

        {/* Info Panel */}
        <div className="w-full md:w-1/2 bg-[var(--bg-overlay)] border border-[var(--border-subtle)] rounded-lg p-5 min-h-[200px]">
          {activeLayer === null ? (
            <div className="h-full flex flex-col items-center justify-center text-[var(--text-muted)] text-center">
              <ShieldAlert size={32} className="mb-2 opacity-50" />
              <p>Select a layer to view details.</p>
              <p className="text-xs mt-2 max-w-[200px]">Notice how strict boundaries prevent the Presentation layer from directly accessing Data.</p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className={`inline-flex items-center gap-2 mb-3 ${layers[activeLayer].color.split(' ')[2]}`}>
                {layers[activeLayer].icon}
                <h5 className="font-semibold text-lg">{layers[activeLayer].name}</h5>
              </div>
              <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                {layers[activeLayer].desc}
              </p>
              <div>
                <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Common Technologies</span>
                <div className="flex flex-wrap gap-2">
                  {layers[activeLayer].tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-[var(--bg-base)] text-[var(--text-primary)] text-xs rounded border border-[var(--border-subtle)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
