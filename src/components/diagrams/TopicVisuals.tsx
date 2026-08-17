import { ArrowDown, CircleDot, Compass, Cpu, Gauge, Map, Network, Router, Smartphone } from 'lucide-react';
import { VisualFrame } from './VisualFrame';

interface OspfAreasDiagramProps {
  areas?: string[];
}

export function OspfAreasDiagram({ areas = ['Area 0', 'Area 1', 'Area 2'] }: OspfAreasDiagramProps) {
  const backbone = areas.find((area) => /area 0/i.test(area)) ?? areas[0];
  const branchAreas = areas.filter((area) => area !== backbone);

  return (
    <VisualFrame
      title="OSPF hierarchical area topology"
      description="Area Border Routers connect non-backbone areas to Area 0. Link-state changes stay mostly inside their area, while Area 0 carries inter-area routes between every branch area."
    >
      <div className="mx-auto max-w-md rounded-xl border-2 border-blue-400 bg-blue-500/15 p-4 text-center">
        <Network className="mx-auto h-7 w-7 text-blue-300" aria-hidden="true" />
        <p className="mt-2 font-bold text-blue-100">{backbone}: Backbone</p>
        <p className="mt-1 text-sm text-text-secondary">Shared path for inter-area traffic</p>
      </div>
      <div className="flex justify-around py-2 text-accent-info" aria-hidden="true">
        {branchAreas.map((area) => <ArrowDown key={area} className="h-7 w-7" />)}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {branchAreas.map((area, index) => (
          <div key={area} className="rounded-xl border border-border-default bg-bg-base p-4 text-center">
            <Router className={`mx-auto h-7 w-7 ${index % 2 === 0 ? 'text-violet-300' : 'text-emerald-300'}`} aria-hidden="true" />
            <p className="mt-2 font-semibold text-text-primary">ABR → {area}</p>
            <p className="mt-1 text-sm text-text-secondary">Internal routers share one area LSDB.</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-text-secondary">
        <strong className="text-amber-200">SPF scope:</strong> each router runs Dijkstra's algorithm against its link-state database to build shortest paths.
      </div>
    </VisualFrame>
  );
}

interface SensorFusionDiagramProps {
  sensors?: string[];
}

const sensorIcons = [Gauge, CircleDot, Compass];

export function SensorFusionDiagram({ sensors = ['Accelerometer', 'Gyroscope', 'Magnetometer'] }: SensorFusionDiagramProps) {
  return (
    <VisualFrame
      title="Sensor fusion pipeline"
      description="Sensor fusion combines noisy acceleration, rotation, and magnetic-heading measurements into a more stable estimate of device orientation and motion than any single sensor can provide."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {sensors.map((sensor, index) => {
          const Icon = sensorIcons[index] ?? CircleDot;
          return (
            <div key={sensor} className="rounded-lg border border-border-default bg-bg-base p-3 text-center">
              <Icon className="mx-auto h-6 w-6 text-emerald-300" aria-hidden="true" />
              <p className="mt-2 font-semibold text-text-primary">{sensor}</p>
              <p className="mt-1 text-xs text-text-tertiary">Raw measurement + noise</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-around py-2 text-accent-info" aria-hidden="true">
        {sensors.map((sensor) => <ArrowDown key={sensor} className="h-7 w-7" />)}
      </div>
      <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-xl border-2 border-emerald-400 bg-emerald-500/15 p-4 text-center">
        <Cpu className="h-7 w-7 text-emerald-300" aria-hidden="true" />
        <div><p className="font-bold text-emerald-100">Fusion algorithm</p><p className="text-sm text-text-secondary">Filter, weight, and reconcile samples</p></div>
      </div>
      <ArrowDown className="mx-auto my-2 h-7 w-7 text-accent-info" aria-hidden="true" />
      <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-xl border border-blue-400/50 bg-blue-500/10 p-4 text-center">
        <Map className="h-6 w-6 text-blue-300" aria-hidden="true" />
        <p className="font-semibold text-blue-100">Stable orientation and motion context</p>
      </div>
    </VisualFrame>
  );
}

interface ThumbZoneDiagramProps {
  zones?: string[];
}

const zoneStyles: Record<string, { className: string; detail: string }> = {
  natural: { className: 'border-emerald-400/60 bg-emerald-500/25 text-emerald-100', detail: 'Primary actions and frequent controls' },
  stretch: { className: 'border-amber-400/60 bg-amber-500/25 text-amber-100', detail: 'Secondary actions used less often' },
  ow: { className: 'border-rose-400/60 bg-rose-500/25 text-rose-100', detail: 'Avoid critical or frequent actions' },
};

export function ThumbZoneDiagram({ zones = ['Natural', 'Stretch', 'Ow'] }: ThumbZoneDiagramProps) {
  const displayZones = [...zones].reverse();

  return (
    <VisualFrame
      title="One-handed thumb reach map"
      description="For a typical one-handed grip, the lower-middle screen is easiest to reach, the middle requires stretching, and the upper edge is hardest. Hand size and grip vary, so this is a placement heuristic rather than a universal measurement."
    >
      <div className="mx-auto max-w-xs rounded-[2rem] border-4 border-border-strong bg-bg-base p-3 shadow-xl" role="img" aria-label="Phone screen split into hard, stretch, and natural thumb reach zones from top to bottom">
        <div className="mb-2 flex items-center justify-center gap-2 text-xs text-text-tertiary">
          <Smartphone className="h-4 w-4" aria-hidden="true" /> Phone top
        </div>
        <div className="overflow-hidden rounded-[1.25rem] border border-border-default">
          {displayZones.map((zone) => {
            const style = zoneStyles[zone.toLowerCase()] ?? { className: 'border-border-default bg-bg-overlay text-text-primary', detail: 'Reach zone' };
            return (
              <div key={zone} className={`flex min-h-28 flex-col items-center justify-center border-b p-4 text-center last:border-b-0 ${style.className}`}>
                <p className="text-lg font-bold">{zone} zone</p>
                <p className="mt-1 text-xs opacity-90">{style.detail}</p>
                {zone.toLowerCase() === 'natural' && (
                  <span className="mt-3 flex min-h-11 min-w-11 items-center justify-center rounded-full border-2 border-current" aria-label="Example 44 by 44 pixel touch target">44</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </VisualFrame>
  );
}
