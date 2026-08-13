import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import source from './Tooltip.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    text: 'Tooltip text',
    position: 'top'
  },
  parameters: {
    ...sourceDocs('src/components/Tooltip/Tooltip.tsx', source),
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ padding: 60 }}>
      <Tooltip {...args}>
        <button type="button" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Hover me
        </button>
      </Tooltip>
    </div>
  )
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, padding: 80 }}>
      {(['top', 'bottom', 'left', 'right'] as const).map((pos) => (
        <div key={pos} style={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip text={`Tooltip ${pos}`} position={pos}>
            <button type="button" style={{ padding: '8px 16px', cursor: 'pointer' }}>
              {pos}
            </button>
          </Tooltip>
        </div>
      ))}
    </div>
  )
};
