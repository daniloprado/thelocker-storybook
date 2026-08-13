import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import cardSource from './Card.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Getting Started with ABC Training',
    description: 'Free live masterclass covering concept setup, adding clients and managing your first training block.',
    tag: 'Master class',
    size: 'medium'
  },
  parameters: {
    ...sourceDocs('src/components/Card/Card.tsx', cardSource),
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <Card
          key={size}
          size={size}
          title={`Card — ${size}`}
          description="Description text for this card variant."
          tag="Tag"
        />
      ))}
      <div style={{ width: '100%' }}>
        <Card
          size="stretch"
          title="Card — stretch"
          description="This card fills the full width of its container."
          tag="Tag"
        />
      </div>
    </div>
  )
};

export const WithImage: Story = {
  render: () => (
    <Card
      size="medium"
      title="Visual Card"
      description="This card has a custom image area."
      tag="Featured"
      imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='142'%3E%3Crect width='320' height='142' fill='%23d9d9d9'/%3E%3C/svg%3E"
    />
  )
};
