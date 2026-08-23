import { ArrowDown, ArrowRight, Radio } from 'lucide-react';
import { VisualFrame } from './VisualFrame';

/**
 * Data-driven concept diagrams shared across every subject.
 *
 * Each renderer is generic and driven entirely by `visualAidData`, so one
 * component serves several topics instead of hand-building fifteen bespoke
 * pictures. Networking 2, Systems Integration, and Mobile Computing all draw on the
 * same set. They follow the conventions of the existing diagrams: composed
 * from elements rather than SVG, wrapped in `VisualFrame` for the accessible
 * figure/caption pairing, and using the design-system colour tokens.
 *
 * Accessibility: every diagram carries a text description in its frame caption,
 * decorative arrows are `aria-hidden`, and no meaning is carried by colour
 * alone — each coloured element also has a text label.
 */

/** One stop along a linear path, e.g. a router or a gateway. */
export interface ChainNode {
  label: string;
  sub?: string;
  /** `edge` = end system, `core` = transit element, `mark` = the element under discussion. */
  kind?: 'edge' | 'core' | 'mark';
}

const chainTone: Record<string, string> = {
  edge: 'border-emerald-400/60 bg-emerald-500/10 text-emerald-100',
  core: 'border-border-default bg-bg-base text-text-primary',
  mark: 'border-amber-400/60 bg-amber-500/15 text-amber-100',
};

/**
 * Left-to-right path of labelled nodes joined by arrows.
 * Wraps to a vertical stack on narrow screens so nothing overflows.
 */
export function PathChainDiagram({
  title,
  description,
  chain = [],
}: {
  title: string;
  description: string;
  chain?: ChainNode[];
}) {
  return (
    <VisualFrame title={title} description={description}>
      <ol className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-stretch">
        {chain.map((node, index) => (
          <li key={node.label} className="flex flex-1 flex-col sm:flex-row sm:items-center">
            <div
              className={`flex-1 rounded-xl border-2 p-3 text-center ${chainTone[node.kind ?? 'core'] ?? chainTone.core}`}
            >
              <p className="text-sm font-bold leading-tight">{node.label}</p>
              {node.sub && <p className="mt-1 text-xs leading-snug text-text-secondary">{node.sub}</p>}
            </div>
            {index < chain.length - 1 && (
              <>
                <ArrowDown className="mx-auto my-1 h-5 w-5 shrink-0 text-accent-info sm:hidden" aria-hidden="true" />
                <ArrowRight className="mx-1 hidden h-5 w-5 shrink-0 text-accent-info sm:block" aria-hidden="true" />
              </>
            )}
          </li>
        ))}
      </ol>
    </VisualFrame>
  );
}

/** One horizontal band in a layered stack. */
export interface StackLayer {
  label: string;
  sub?: string;
}

/**
 * Vertical layer stack, top band first — used for protocol stacks and for
 * showing which layer a security mechanism operates at.
 */
export function LayerStackDiagram({
  title,
  description,
  layers = [],
}: {
  title: string;
  description: string;
  layers?: StackLayer[];
}) {
  return (
    <VisualFrame title={title} description={description}>
      <ol className="mx-auto max-w-lg overflow-hidden rounded-xl border border-border-default">
        {layers.map((layer, index) => (
          <li
            key={layer.label}
            className={`flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-border-default p-3 last:border-b-0 ${
              index % 2 === 0 ? 'bg-bg-base' : 'bg-bg-overlay'
            }`}
          >
            <span className="font-semibold text-text-primary">{layer.label}</span>
            {layer.sub && <span className="text-sm text-text-secondary">{layer.sub}</span>}
          </li>
        ))}
      </ol>
    </VisualFrame>
  );
}

/** A level of a hierarchy: a heading plus the items sitting at that level. */
export interface TreeLevel {
  label: string;
  items: string[];
}

/**
 * Root-and-levels hierarchy. Suits DNS, the MAC protocol taxonomy, and the
 * datacentre switch tiers, all of which fan out rather than branch irregularly.
 */
export function TreeHierarchyDiagram({
  title,
  description,
  root,
  levels = [],
}: {
  title: string;
  description: string;
  root?: string;
  levels?: TreeLevel[];
}) {
  return (
    <VisualFrame title={title} description={description}>
      <div className="flex flex-col items-center gap-1">
        {root && (
          <div className="w-full max-w-sm rounded-xl border-2 border-blue-400 bg-blue-500/15 p-3 text-center">
            <p className="font-bold text-blue-100">{root}</p>
          </div>
        )}
        {levels.map((level) => (
          <div key={level.label} className="w-full">
            <ArrowDown className="mx-auto my-1 h-5 w-5 text-accent-info" aria-hidden="true" />
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-text-tertiary">
              {level.label}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {level.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border-default bg-bg-base p-2.5 text-center text-sm text-text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

/** One field in a header layout, sized by relative `span`. */
export interface HeaderField {
  label: string;
  bits?: string;
  span?: number;
}

/**
 * Protocol header field layout. `span` sets relative width so a 16-bit field
 * reads as visibly narrower than a variable-length payload.
 */
export function FieldLayoutDiagram({
  title,
  description,
  fields = [],
}: {
  title: string;
  description: string;
  fields?: HeaderField[];
}) {
  return (
    <VisualFrame title={title} description={description}>
      <div className="flex flex-wrap gap-1.5">
        {fields.map((field) => (
          <div
            key={field.label}
            style={{ flexGrow: field.span ?? 1, flexBasis: `${(field.span ?? 1) * 5}rem` }}
            className="rounded-lg border border-cyan-400/50 bg-cyan-500/10 p-2.5 text-center"
          >
            <p className="text-sm font-semibold leading-tight text-cyan-100">{field.label}</p>
            {field.bits && <p className="mt-0.5 text-xs text-text-tertiary">{field.bits}</p>}
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

/** A weighted link between two graph nodes. */
export type GraphEdge = [from: string, to: string, cost: number];

/**
 * Small weighted graph rendered as an adjacency list rather than a plotted
 * figure: link costs are the thing being reasoned about in routing problems,
 * and a list of them stays readable at every screen width and to screen readers.
 */
export function WeightedGraphDiagram({
  title,
  description,
  graphNodes = [],
  edges = [],
}: {
  title: string;
  description: string;
  graphNodes?: string[];
  edges?: GraphEdge[];
}) {
  return (
    <VisualFrame title={title} description={description}>
      <div className="grid gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-tertiary">Nodes</p>
          <ul className="flex flex-wrap gap-2">
            {graphNodes.map((node) => (
              <li
                key={node}
                className="grid h-10 w-10 place-items-center rounded-full border-2 border-violet-400 bg-violet-500/15 font-bold text-violet-100"
              >
                {node}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-tertiary">Link costs</p>
          <ul className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
            {edges.map(([from, to, cost]) => (
              <li
                key={`${from}-${to}`}
                className="flex items-center justify-between gap-2 rounded-lg border border-border-default bg-bg-base px-3 py-2 text-sm"
              >
                <span className="font-mono text-text-primary">
                  {from} — {to}
                </span>
                <span className="font-bold text-violet-200">{cost}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VisualFrame>
  );
}

/** One message exchanged between two actors, in order. */
export interface FlowMessage {
  from: string;
  to: string;
  label: string;
  /** Marks a message that fails, is refused, or is an attack. */
  hostile?: boolean;
}

/**
 * Ordered message exchange between named actors. Direction is shown by an arrow
 * glyph and by the explicit "from → to" text, so it survives both narrow screens
 * and screen readers.
 */
export function ActorFlowDiagram({
  title,
  description,
  actors = [],
  messages = [],
}: {
  title: string;
  description: string;
  actors?: string[];
  messages?: FlowMessage[];
}) {
  return (
    <VisualFrame title={title} description={description}>
      <div className="grid gap-4">
        <ul className="flex flex-wrap justify-center gap-2">
          {actors.map((actor) => (
            <li
              key={actor}
              className="rounded-lg border border-border-default bg-bg-overlay px-3 py-2 text-sm font-semibold text-text-primary"
            >
              {actor}
            </li>
          ))}
        </ul>
        <ol className="grid gap-2">
          {messages.map((message, index) => (
            <li
              key={`${message.label}-${index}`}
              className={`flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border p-3 ${
                message.hostile
                  ? 'border-rose-400/60 bg-rose-500/10'
                  : 'border-border-default bg-bg-base'
              }`}
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-bg-overlay text-xs font-bold text-text-secondary">
                {index + 1}
              </span>
              <span className="font-mono text-xs text-text-tertiary">
                {message.from} <ArrowRight className="inline h-3 w-3" aria-hidden="true" /> {message.to}
              </span>
              <span className={`text-sm ${message.hostile ? 'text-rose-100' : 'text-text-primary'}`}>
                {message.label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </VisualFrame>
  );
}

/** A wireless station plus the stations it can actually hear. */
export interface RadioStation {
  label: string;
  hears: string[];
}

/**
 * Wireless audibility map. Rendering "who can hear whom" explicitly is what
 * makes the hidden terminal problem obvious: the asymmetry is the whole point,
 * and it is far clearer as text than as overlapping circles.
 */
export function RadioRangeDiagram({
  title,
  description,
  stations = [],
}: {
  title: string;
  description: string;
  stations?: RadioStation[];
}) {
  return (
    <VisualFrame title={title} description={description}>
      <ul className="grid gap-3 sm:grid-cols-3">
        {stations.map((station) => (
          <li
            key={station.label}
            className="rounded-xl border border-border-default bg-bg-base p-4 text-center"
          >
            <Radio className="mx-auto h-6 w-6 text-cyan-300" aria-hidden="true" />
            <p className="mt-2 font-bold text-text-primary">{station.label}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-text-tertiary">Can hear</p>
            <p className="mt-1 text-sm text-text-secondary">
              {station.hears.length > 0 ? station.hears.join(', ') : 'nobody else'}
            </p>
          </li>
        ))}
      </ul>
    </VisualFrame>
  );
}
