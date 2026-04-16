import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import inputSource from './Input.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Basic usage',
    size: 'middle',
    status: 'default',
    allowClear: true,
    disabled: false
  },
  parameters: sourceDocs('src/components/Input/Input.tsx', inputSource),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 320 }}>
      <Input size="small" placeholder="Small" />
      <Input size="middle" placeholder="Middle" />
      <Input size="large" placeholder="Large" />
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 320 }}>
      <Input placeholder="Default" allowClear defaultValue="Value" />
      <Input placeholder="Disabled" disabled defaultValue="Disabled" />
      <Input placeholder="Error" status="error" defaultValue="Error" />
      <Input placeholder="Warning" status="warning" defaultValue="Warning" />
      <Input placeholder="With prefix and suffix" prefix="https://" suffix=".com" />
    </div>
  )
};
