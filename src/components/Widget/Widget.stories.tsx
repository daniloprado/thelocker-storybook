import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from './Widget';
import source from './Widget.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Widget> = {
  title: 'Components/Widget',
  component: Widget,
  args: {
    title: 'Heading'
  },
  parameters: {
    ...sourceDocs('src/components/Widget/Widget.tsx', source),
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Widget>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <Widget {...args}>
        <p style={{ margin: 0, fontSize: 14, color: '#6d6a6a' }}>Widget content goes here.</p>
      </Widget>
    </div>
  )
};

export const WithMetric: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Widget title="Revenue">
        <span style={{ fontSize: 32, fontWeight: 700, color: '#241f20' }}>$1,000.00</span>
      </Widget>
    </div>
  )
};

export const WithHeaderAction: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Widget
        title="Sessions"
        headerRight={
          <button
            type="button"
            style={{
              border: '1px solid #e7e7e7',
              borderRadius: 4,
              background: '#fff',
              padding: '4px 8px',
              fontSize: 12,
              cursor: 'pointer'
            }}
          >
            This week ▾
          </button>
        }
      >
        <p style={{ margin: 0, fontSize: 14, color: '#6d6a6a' }}>
          12 sessions completed this week.
        </p>
      </Widget>
    </div>
  )
};
