import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import { Icon } from '../Icon/Icon';
import chipSource from './Chip.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  args: {
    label: 'Chip',
    color: 'green',
    size: 'small',
    showLeadingIcon: false,
    showTrailingIcon: false
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['green', 'red', 'orange', 'teal', 'yellow', 'blue', 'pink', 'neutral', 'white', 'whiteStrong']
    }
  },
  parameters: sourceDocs('src/components/Chip/Chip.tsx', chipSource),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => {
    const colors = [
      'green',
      'red',
      'orange',
      'teal',
      'yellow',
      'blue',
      'pink',
      'neutral',
      'white',
      'whiteStrong'
    ] as const;
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

export const WithSlots: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Chip label="Chip" color="green" size="medium" showLeadingIcon showTrailingIcon />
      <Chip
        label="Filter"
        color="neutral"
        size="medium"
        leading={<Icon fa-code="sliders" fa-style="regular" size="xsmall" />}
        trailing={<Icon fa-code="xmark" fa-style="regular" size="xsmall" />}
      />
      <Chip label="White Strong" color="whiteStrong" size="medium" />
    </div>
  )
};
