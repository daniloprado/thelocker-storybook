import type { Meta, StoryObj } from '@storybook/react';
import { DropArea } from './DropArea';
import dropAreaSource from './DropArea.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof DropArea> = {
  title: 'Components/DropArea',
  component: DropArea,
  args: {
    label: 'Drag and drop your items here',
    description: 'or drag questions from the left',
    showDescription: true,
    state: 'default'
  },
  parameters: {
    ...sourceDocs('src/components/DropArea/DropArea.tsx', dropAreaSource),
    layout: 'padded'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof DropArea>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    state: 'active'
  }
};

export const WithoutDescription: Story = {
  args: {
    showDescription: false
  }
};
