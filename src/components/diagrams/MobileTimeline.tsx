import { useState } from 'react';
import { Code, Cpu, Zap } from 'lucide-react';

export function MobileTimeline() {
  const [selected, setSelected] = useState(0);

  const eras = [
    {
      year: 'Native (Swift/Kotlin)',
      icon: <Cpu size={24} />,
      color: 'text-rose-400',
      bg: 'bg-rose-500/20 border-rose-500/50',
      desc: 'Code compiles directly to machine instructions for the specific OS. UI is rendered by the OS OEM widgets.',
      pros: ['Maximum Performance', 'Direct API Access'],
      cons: ['Two separate codebases']
    },
    {
      year: 'React Native (JS Bridge)',
      icon: <Code size={24} />,
      color: 'text-blue-400',
      bg: 'bg-blue-500/20 border-blue-500/50',
      desc: 'A single JavaScript codebase. The JS thread talks to the Native thread via a JSON bridge to render OEM UI widgets.',
      pros: ['Single Codebase', 'Native look and feel'],
      cons: ['Bridge can be a bottleneck']
    },
    {
      year: 'Flutter (Direct Canvas)',
      icon: <Zap size={24} />,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/20 border-cyan-500/50',
      desc: 'A single Dart codebase. Bypasses OEM widgets entirely and paints its own UI directly onto the screen using a high-performance graphics engine.',
      pros: ['Consistent UI everywhere', 'No Bridge overhead'],
      cons: ['Custom look might feel non-native']
    }
  ];

  return (
    <div className="p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl my-4">
      <h4 className="text-[var(--text-primary)] font-semibold text-lg mb-4">Mobile Development Evolution</h4>
      
      <div className="flex flex-col gap-4">
        {eras.map((era, idx) => (
          <div 
            key={era.year}
            onClick={() => setSelected(idx)}
            className={`
              relative p-4 rounded-lg border cursor-pointer transition-all duration-300 overflow-hidden
              ${selected === idx ? era.bg : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:bg-[var(--bg-hover)]'}
            `}
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-full bg-black/20 ${selected === idx ? era.color : 'text-[var(--text-muted)]'}`}>
                {era.icon}
              </div>
              <div className="flex-1">
                <h5 className={`font-semibold ${selected === idx ? era.color : 'text-[var(--text-secondary)]'}`}>
                  {era.year}
                </h5>
                {selected === idx && (
                  <div className="animate-in slide-in-from-top-2 fade-in duration-300 mt-2">
                    <p className="text-[var(--text-primary)] text-sm mb-3 leading-relaxed">{era.desc}</p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <div>
                        <span className="text-emerald-400 font-semibold block mb-1">Pros:</span>
                        <ul className="list-disc list-inside text-[var(--text-secondary)]">
                          {era.pros.map(p => <li key={p}>{p}</li>)}
                        </ul>
                      </div>
                      <div>
                        <span className="text-rose-400 font-semibold block mb-1">Cons:</span>
                        <ul className="list-disc list-inside text-[var(--text-secondary)]">
                          {era.cons.map(c => <li key={c}>{c}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
