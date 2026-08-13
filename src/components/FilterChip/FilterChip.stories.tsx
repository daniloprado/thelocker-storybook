import type { Meta, StoryObj } from '@storybook/react';
import { FilterChip } from './FilterChip';
import source from './FilterChip.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof FilterChip> = {
  title: 'Components/FilterChip',
  component: FilterChip,
  args: {
    label: 'Filter',
    selected: false,
    disabled: false,
    showClose: false
  },
  parameters: {
    ...sourceDocs('src/components/FilterChip/FilterChip.tsx', source),
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof FilterChip>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: 16, alignItems: 'center' }}>
      <FilterChip label="Default" onClick={() => {}} />
      <FilterChip label="Selected" selected onClick={() => {}} />
      <FilterChip label="Disabled" disabled />
      <FilterChip label="With close" selected showClose onClose={() => {}} onClick={() => {}} />
    </div>
  )
};

export const FilterChipGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      <FilterChip label="All" selected onClick={() => {}} />
      <FilterChip label="Strength" onClick={() => {}} />
      <FilterChip label="Cardio" onClick={() => {}} />
      <FilterChip label="Flexibility" selected onClick={() => {}} />
      <FilterChip label="Recovery" onClick={() => {}} />
    </div>
  )
};

export const WithClose: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      <FilterChip label="Strength" selected showClose onClose={() => {}} onClick={() => {}} />
      <FilterChip label="Cardio" selected showClose onClose={() => {}} onClick={() => {}} />
      <FilterChip label="Add filter" onClick={() => {}} />
    </div>
  )
};
