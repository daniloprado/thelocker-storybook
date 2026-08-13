import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import switchSource from './Switch.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  args: {
    label: 'Switch label',
    disabled: false,
  },
  parameters: {
    ...sourceDocs('src/components/Switch/Switch.tsx', switchSource),
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '16px 32px', alignItems: 'center' }}>
      <span style={{ fontSize: 12, color: '#6d6a6a' }}>Unselected</span>
      <span style={{ fontSize: 12, color: '#6d6a6a' }}>Selected</span>
      <span style={{ fontSize: 12, color: '#6d6a6a' }}>Disabled</span>

      <Switch />
      <Switch defaultChecked />
      <Switch disabled />

      <Switch label="Off" />
      <Switch label="On" defaultChecked />
      <Switch label="Disabled" disabled />

      <div />
      <div />
      <Switch label="Disabled on" defaultChecked disabled />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'Enable notifications',
    defaultChecked: true,
  },
};
