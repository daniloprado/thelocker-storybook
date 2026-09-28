import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import emptyStateSource from './EmptyState.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/Empty State',
  component: EmptyState,
  args: {
    heading: 'No data',
    description: 'Your data will appear here',
    showIcon: true,
    showHeading: true,
    showDescription: true,
    showButton: true,
    iconCode: 'user',
    buttonLabel: 'Add item'
  },
  argTypes: {
    icon: { control: false },
    action: { control: false },
    onButtonClick: { action: 'button click' }
  },
  parameters: { ...sourceDocs('src/components/EmptyState/EmptyState.tsx', emptyStateSource), layout: 'centered' },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Playground: Story = {};

export const Toggles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <EmptyState />
      <EmptyState showButton={false} />
      <EmptyState showIcon={false} />
      <EmptyState showDescription={false} />
      <EmptyState showHeading={false} showDescription={false} showButton={false} />
    </div>
  )
};

export const CustomContent: Story = {
  render: () => (
    <EmptyState
      iconCode="magnifying-glass"
      heading="No results"
      description="Try a different search term or clear your filters."
      buttonLabel="Clear filters"
    />
  )
};
