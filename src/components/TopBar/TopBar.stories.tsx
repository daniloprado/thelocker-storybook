import type { Meta, StoryObj } from '@storybook/react';
import { TopBar } from './TopBar';
import topBarSource from './TopBar.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const SAMPLE_AVATAR = 'https://i.pravatar.cc/80?img=32';

const meta: Meta<typeof TopBar> = {
  title: 'Components/Top Bar',
  component: TopBar,
  args: {
    userName: 'Jaron Lanier',
    avatarSrc: SAMPLE_AVATAR,
    showAiButton: true,
    hasNotification: true
  },
  parameters: {
    ...sourceDocs('src/components/TopBar/TopBar.tsx', topBarSource),
    layout: 'padded'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const Playground: Story = {};

export const WithLeftContent: Story = {
  render: (args) => (
    <TopBar
      {...args}
      leftControls={
        <h1 style={{
          margin: 0,
          fontFamily: "'Mulish', sans-serif",
          fontSize: 20,
          fontWeight: 700,
          color: '#1a1a1a',
          lineHeight: '72px'
        }}>
          Overview
        </h1>
      }
    />
  )
};

export const NoAiButton: Story = {
  args: {
    showAiButton: false
  }
};

export const NoNotification: Story = {
  args: {
    hasNotification: false
  }
};
