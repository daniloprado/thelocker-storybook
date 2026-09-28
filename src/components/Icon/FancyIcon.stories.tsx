import type { Meta, StoryObj } from '@storybook/react';
import { FancyIcon } from './FancyIcon';
import fancyIconSource from './FancyIcon.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof FancyIcon> = {
  title: 'Components/Icon/Fancy Icon',
  component: FancyIcon,
  args: {
    faCode: 'user',
    faStyle: 'regular',
    size: 'small',
    color: 'blue'
  },
  argTypes: {
    faCode: { control: 'text' },
    faStyle: { control: 'select', options: ['solid', 'regular', 'light'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },
    color: { control: 'inline-radio', options: ['blue', 'neutral'] }
  },
  parameters: { ...sourceDocs('src/components/Icon/FancyIcon.tsx', fancyIconSource), layout: 'centered' },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof FancyIcon>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {(['blue', 'neutral'] as const).map((color) => (
        <div key={color} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <FancyIcon key={size} faCode="user" size={size} color={color} />
          ))}
          <span style={{ fontSize: 12, color: '#6d6a6a', textTransform: 'capitalize' }}>{color}</span>
        </div>
      ))}
    </div>
  )
};
