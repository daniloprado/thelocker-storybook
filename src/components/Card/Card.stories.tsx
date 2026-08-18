import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import cardSource from './Card.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Heading',
    description: lorem,
    tag: 'Label',
    size: 'medium',
    image: true
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
        <Card key={size} size={size} title="Heading" description={lorem} tag="Label" />
      ))}
      <div style={{ width: '100%' }}>
        <Card size="stretch" title="Heading" description={lorem} tag="Label" />
      </div>
    </div>
  )
};

export const WithImage: Story = {
  render: () => (
    <Card
      size="small"
      title="Heading"
      description={lorem}
      tag="Label"
      imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='142'%3E%3Crect width='280' height='142' fill='%23d9d9d9'/%3E%3C/svg%3E"
    />
  )
};

export const NoImage: Story = {
  args: {
    size: 'small',
    image: false
  }
};

export const EmptySlot: Story = {
  render: () => (
    <Card size="small" image={false}>
      {null}
    </Card>
  )
};
