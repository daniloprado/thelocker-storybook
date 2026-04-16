import type { Meta, StoryObj } from '@storybook/react';

const Introduction = () => (
  <div style={{ maxWidth: 640, lineHeight: 1.5 }}>
    <h1 style={{ marginBottom: 8 }}>The Locker Storybook</h1>
    <p style={{ marginTop: 0 }}>
      Component library workspace. Add components in <code>src/components/</code> and create matching <code>*.stories.tsx</code> files.
    </p>
  </div>
);

const meta: Meta<typeof Introduction> = {
  title: 'Welcome/Introduction',
  component: Introduction,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof Introduction>;

export const Default: Story = {};
