import { useState } from 'react';
import { Play, RotateCcw, Server, Smartphone, Router as RouterIcon } from 'lucide-react';

export function PacketSimulator() {
  const [step, setStep] = useState(0);

  const steps = [
    { label: 'Idle', desc: 'Click play to start packet transmission.', packetPos: '0%' },
    { label: 'Client TCP SYN', desc: 'Client sends SYN to initiate connection.', packetPos: '20%' },
    { label: 'Router Processing', desc: 'Router examines destination IP and forwards.', packetPos: '50%' },
    { label: 'Server Receives SYN', desc: 'Server receives SYN and prepares SYN-ACK.', packetPos: '80%' },
    { label: 'Connection Established', desc: 'Server sends SYN-ACK back. Connection open.', packetPos: '100%' },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleReset = () => setStep(0);

  return (
    <div className="p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl my-4">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-[var(--text-primary)] font-semibold text-lg">Packet Transmission Simulator</h4>
        <div className="flex gap-2">
          <button 
            onClick={handleReset}
            className="p-2 hover:bg-[var(--bg-hover)] text-[var(--text-secondary)] rounded-md transition-colors"
            title="Reset"
          >
            <RotateCcw size={18} />
          </button>
          <button 
            onClick={handleNext}
            disabled={step === steps.length - 1}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 rounded-md transition-colors disabled:opacity-50"
          >
            <Play size={16} /> {step === 0 ? 'Start' : 'Next Step'}
          </button>
        </div>
      </div>

      {/* Diagram Area */}
      <div className="relative h-32 bg-[var(--bg-base)] rounded-lg flex items-center justify-between px-8 mb-6 overflow-hidden border border-[var(--border-subtle)]">
        {/* Nodes */}
        <div className="flex flex-col items-center z-10">
          <div className="w-12 h-12 rounded-full bg-[var(--bg-overlay)] border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Smartphone size={24} />
          </div>
          <span className="text-xs text-[var(--text-secondary)] mt-2 font-medium">Client</span>
        </div>

        <div className="flex flex-col items-center z-10">
          <div className="w-12 h-12 rounded-full bg-[var(--bg-overlay)] border-2 border-amber-500 flex items-center justify-center text-amber-400">
            <RouterIcon size={24} />
          </div>
          <span className="text-xs text-[var(--text-secondary)] mt-2 font-medium">Router</span>
        </div>

        <div className="flex flex-col items-center z-10">
          <div className="w-12 h-12 rounded-full bg-[var(--bg-overlay)] border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <Server size={24} />
          </div>
          <span className="text-xs text-[var(--text-secondary)] mt-2 font-medium">Server</span>
        </div>

        {/* Path Line */}
        <div className="absolute left-14 right-14 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-blue-900 via-amber-900 to-emerald-900 z-0 opacity-50 rounded-full"></div>

        {/* Packet */}
        {step > 0 && (
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-6 h-4 bg-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.8)] z-20 transition-all duration-700 ease-in-out flex items-center justify-center"
            style={{ 
              left: `calc(3.5rem + ${steps[step].packetPos} * 0.8)` // Approximate relative positioning
            }}
          >
            <div className="w-4 h-1 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-[var(--bg-overlay)] p-4 rounded-lg border-l-4 border-blue-500">
        <h5 className="text-[var(--text-primary)] font-medium mb-1">Step {step + 1}: {steps[step].label}</h5>
        <p className="text-[var(--text-secondary)] text-sm">{steps[step].desc}</p>
      </div>
    </div>
  );
}
