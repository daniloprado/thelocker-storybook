import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import tabsSource from './Tabs.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { ...sourceDocs('src/components/Tabs/Tabs.tsx', tabsSource), layout: 'centered' },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  render: () => (
    <Tabs>
      <Tabs.Item label="Tab one" active />
      <Tabs.Item label="Tab two" />
      <Tabs.Item label="Tab three" />
    </Tabs>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#6d6a6a' }}>Default</p>
        <Tabs size="default">
          <Tabs.Item label="Tab one" active />
          <Tabs.Item label="Tab two" />
          <Tabs.Item label="Tab three" />
        </Tabs>
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#6d6a6a' }}>Small</p>
        <Tabs size="small">
          <Tabs.Item label="Tab one" active />
          <Tabs.Item label="Tab two" />
          <Tabs.Item label="Tab three" />
        </Tabs>
      </div>
    </div>
  )
};

export const Vertical: Story = {
  render: () => (
    <Tabs orientation="vertical">
      <Tabs.Item label="Tab one" active />
      <Tabs.Item label="Tab two" />
      <Tabs.Item label="Tab three" />
    </Tabs>
  )
};
