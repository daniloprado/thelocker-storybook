import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import checkboxSource from './Checkbox.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox label',
    disabled: false,
    indeterminate: false,
  },
  parameters: {
    ...sourceDocs('src/components/Checkbox/Checkbox.tsx', checkboxSource),
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '16px 32px', alignItems: 'center' }}>
      <span style={{ fontSize: 12, color: '#6d6a6a' }}>Unselected</span>
      <span style={{ fontSize: 12, color: '#6d6a6a' }}>Selected</span>
      <span style={{ fontSize: 12, color: '#6d6a6a' }}>Indeterminate</span>
      <span style={{ fontSize: 12, color: '#6d6a6a' }}>Disabled</span>

      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox indeterminate />
      <Checkbox disabled />

      <Checkbox label="Unselected" />
      <Checkbox label="Selected" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />

      {/* Disabled + selected / indeterminate */}
      <div />
      <Checkbox label="Disabled selected" defaultChecked disabled />
      <Checkbox label="Disabled indeterminate" indeterminate disabled />
      <div />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'I agree to the terms and conditions',
    defaultChecked: true,
  },
};
