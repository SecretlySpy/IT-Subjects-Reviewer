import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Skeleton } from '@/components/ui/Skeleton';
import { Tooltip } from '@/components/ui/Tooltip';
import { Search, Mail } from 'lucide-react';
import { tokens } from '@/design-system/tokens';

export const DesignSystem: React.FC = () => {
  return (
    <div className="space-y-12 pb-20">
      <div>
        <h1 className="text-3xl font-bold mb-2">Design System QA</h1>
        <p className="text-text-secondary">A visual showcase of tokens and UI primitives.</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b border-border-default pb-2">1. Typography</h2>
        <div className="space-y-4">
          <div className="text-4xl font-bold">Heading 1 (4xl)</div>
          <div className="text-3xl font-bold">Heading 2 (3xl)</div>
          <div className="text-2xl font-semibold">Heading 3 (2xl)</div>
          <div className="text-xl font-medium">Heading 4 (xl)</div>
          <div className="text-lg">Large Text (lg)</div>
          <div className="text-base">Base Text (base) - The quick brown fox jumps over the lazy dog.</div>
          <div className="text-sm">Small Text (sm) - Secondary information.</div>
          <div className="text-xs">Extra Small (xs) - Metadata or very fine print.</div>
          <div className="font-mono text-sm mt-4 p-4 bg-bg-elevated rounded-md border border-border-subtle text-text-accent">
            Mono font family for code blocks
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b border-border-default pb-2">2. Color Palette</h2>
        
        <h3 className="text-lg font-medium mb-3 mt-6">Backgrounds</h3>
        <div className="flex flex-wrap gap-4">
          {Object.entries(tokens.colors.bg).map(([key, value]) => (
            <div key={key} className="w-32">
              <div className="h-16 rounded-md border border-border-subtle mb-2" style={{ backgroundColor: value }}></div>
              <div className="text-sm font-medium capitalize">bg-{key}</div>
              <div className="text-xs text-text-tertiary">{value}</div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-medium mb-3 mt-8">Accents</h3>
        <div className="flex flex-wrap gap-4">
          {Object.entries(tokens.colors.accent).map(([key, value]) => (
            <div key={key} className="w-32">
              <div className="h-16 rounded-md border border-border-subtle mb-2" style={{ backgroundColor: value }}></div>
              <div className="text-sm font-medium capitalize">accent-{key}</div>
              <div className="text-xs text-text-tertiary">{value}</div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-medium mb-3 mt-8">Mastery Levels</h3>
        <div className="flex flex-wrap gap-4">
          {Object.entries(tokens.colors.mastery).map(([key, value]) => (
            <div key={key} className="w-32">
              <div className="h-16 rounded-md border border-border-subtle mb-2" style={{ backgroundColor: value }}></div>
              <div className="text-sm font-medium capitalize">mastery-{key}</div>
              <div className="text-xs text-text-tertiary">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b border-border-default pb-2">3. UI Primitives</h2>
        
        <h3 className="text-lg font-medium mb-4">Buttons</h3>
        <div className="flex flex-wrap gap-4 items-center mb-8">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" isLoading>Loading</Button>
          <Button variant="secondary" icon={<Mail className="w-4 h-4" />}>With Icon</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center mb-8">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <h3 className="text-lg font-medium mb-4">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <h4 className="font-bold mb-2">Base Card</h4>
            <p className="text-text-secondary text-sm">A standard flat card container.</p>
          </Card>
          <Card elevated className="p-6">
            <h4 className="font-bold mb-2">Elevated Card</h4>
            <p className="text-text-secondary text-sm">Uses bg-elevated and shadow.</p>
          </Card>
          <Card interactive elevated className="p-6">
            <h4 className="font-bold mb-2">Interactive Card</h4>
            <p className="text-text-secondary text-sm">Hover me for elevation effect.</p>
          </Card>
        </div>

        <h3 className="text-lg font-medium mb-4">Badges</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          <Badge variant="new">New</Badge>
          <Badge variant="learning">Learning</Badge>
          <Badge variant="reviewing">Reviewing</Badge>
          <Badge variant="mastered">Mastered</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>

        <h3 className="text-lg font-medium mb-4">Inputs</h3>
        <div className="max-w-md space-y-4 mb-8">
          <Input placeholder="Standard input..." />
          <Input placeholder="Search..." icon={<Search className="w-4 h-4" />} />
          <Input placeholder="Disabled..." disabled />
        </div>

        <h3 className="text-lg font-medium mb-4">Progress Rings</h3>
        <div className="flex flex-wrap gap-8 items-center mb-8 bg-bg-elevated p-6 rounded-lg inline-flex border border-border-default">
          <div className="flex flex-col items-center gap-2">
            <ProgressRing value={25} size={60} strokeWidth={6} color={tokens.colors.mastery.new} trackColor={tokens.colors.border.subtle} />
            <span className="text-sm">25%</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ProgressRing value={50} size={60} strokeWidth={6} color={tokens.colors.mastery.learning} trackColor={tokens.colors.border.subtle} />
            <span className="text-sm">50%</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ProgressRing value={75} size={60} strokeWidth={6} color={tokens.colors.mastery.reviewing} trackColor={tokens.colors.border.subtle} />
            <span className="text-sm">75%</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ProgressRing value={100} size={60} strokeWidth={6} color={tokens.colors.mastery.mastered} trackColor={tokens.colors.border.subtle} />
            <span className="text-sm">100%</span>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-4">Tooltips</h3>
        <div className="flex gap-12 mb-8 p-12 bg-bg-elevated rounded-lg border border-border-default">
          <Tooltip content="Tooltip on top" position="top">
            <Button variant="secondary">Hover Top</Button>
          </Tooltip>
          <Tooltip content="Tooltip on bottom" position="bottom">
            <Button variant="secondary">Hover Bottom</Button>
          </Tooltip>
          <Tooltip content="Tooltip on right" position="right">
            <Button variant="secondary">Hover Right</Button>
          </Tooltip>
        </div>

        <h3 className="text-lg font-medium mb-4">Skeletons</h3>
        <div className="max-w-md space-y-4 mb-8">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
      </section>
    </div>
  );
};
