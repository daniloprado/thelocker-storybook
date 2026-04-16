import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import chipSource from './Chip.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  args: {
    label: 'Chip',
    color: 'green',
    size: 'small',
    showLeadingIcon: true,
    showTrailingIcon: true
  },
  parameters: sourceDocs('src/components/Chip/Chip.tsx', chipSource),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => {
    const colors = ['green', 'red', 'orange', 'teal', 'yellow', 'blue', 'pink', 'neutral', 'white'] as const;
    const sizes = ['small', 'medium', 'large'] as const;

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '12px 16px' }}>
        {colors.flatMap((color) =>
          sizes.map((size) => <Chip key={`${color}-${size}`} color={color} size={size} label="Chip" />)
        )}
      </div>
    );
  }
};

export const NoIcons: Story = {
  args: {
    showLeadingIcon: false,
    showTrailingIcon: false
  }
};
