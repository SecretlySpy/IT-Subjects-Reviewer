import { useState } from 'react';
import { ArrowLeft, ArrowRight, Play, RotateCcw, Server, Smartphone } from 'lucide-react';
import { VisualFrame } from './VisualFrame';

interface PacketSimulatorProps {
  steps?: string[];
}

const stepDescriptions = [
  'The client sends SYN with its initial sequence number to request a connection.',
  'The server acknowledges the client sequence and sends its own SYN sequence number.',
  'The client acknowledges the server sequence. Both endpoints can now exchange data.',
];

export function PacketSimulator({ steps = ['SYN', 'SYN-ACK', 'ACK'] }: PacketSimulatorProps) {
  const [activeStep, setActiveStep] = useState(-1);
  const handshake = steps.map((label, index) => ({
    label,
    direction: index === 1 ? 'server-to-client' : 'client-to-server',
    description: stepDescriptions[index] ?? `${label} advances the TCP connection setup.`,
  }));
  const isComplete = activeStep === handshake.length - 1;

  return (
    <VisualFrame
      title="TCP three-way handshake"
      description="TCP establishes a reliable connection with three ordered messages: SYN from the client, SYN-ACK from the server, then the client's final ACK."
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-medium text-blue-300">
          <Smartphone className="h-5 w-5" aria-hidden="true" /> Client
        </div>
        <div className="flex items-center gap-2 font-medium text-emerald-300">
          Server <Server className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <ol className="mt-4 space-y-3" aria-label="TCP handshake messages">
        {handshake.map((message, index) => {
          const reached = index <= activeStep;
          const reverse = message.direction === 'server-to-client';
          const DirectionIcon = reverse ? ArrowLeft : ArrowRight;
          return (
            <li
              key={`${message.label}-${index}`}
              className={`grid min-h-16 grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-lg border px-3 py-2 transition-colors motion-reduce:transition-none ${
                reached ? 'border-accent-primary/60 bg-accent-primaryMuted/50' : 'border-border-subtle bg-bg-base'
              }`}
            >
              <span className={`text-sm ${reverse ? 'text-text-tertiary' : 'font-semibold text-blue-300'}`}>
                {reverse ? 'receives' : message.label}
              </span>
              <span className="flex min-w-24 flex-col items-center gap-1 text-center">
                <DirectionIcon className={`h-5 w-10 ${reached ? 'text-accent-info' : 'text-text-tertiary'}`} aria-hidden="true" />
                <span className="text-xs font-semibold text-text-primary">{message.label}</span>
              </span>
              <span className={`text-right text-sm ${reverse ? 'font-semibold text-emerald-300' : 'text-text-tertiary'}`}>
                {reverse ? message.label : 'receives'}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 rounded-lg border-l-4 border-accent-primary bg-bg-overlay p-4" aria-live="polite">
        <p className="font-medium text-text-primary">
          {activeStep < 0 ? 'Ready to connect' : `Step ${activeStep + 1}: ${handshake[activeStep].label}`}
        </p>
        <p className="mt-1 text-sm text-text-secondary">
          {activeStep < 0 ? 'Start the sequence to trace each message.' : handshake[activeStep].description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={() => setActiveStep(-1)}
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-default px-3 text-text-secondary hover:bg-bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
          aria-label="Reset TCP handshake"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset
        </button>
        <button
          type="button"
          onClick={() => setActiveStep((current) => Math.min(current + 1, handshake.length - 1))}
          disabled={isComplete}
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent-primaryMuted px-4 font-medium text-text-accent hover:bg-accent-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Play className="h-4 w-4" aria-hidden="true" /> {activeStep < 0 ? 'Start' : 'Next message'}
        </button>
      </div>
    </VisualFrame>
  );
}
