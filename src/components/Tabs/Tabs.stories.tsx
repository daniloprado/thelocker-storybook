import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { Icon } from '../Icon/Icon';
import tabsSource from './Tabs.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const calendarTrailing = (
  <span className="tabs__icon-btn" aria-hidden>
    <Icon fa-code="calendar" fa-style="regular" size="xsmall" />
  </span>
);

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    size: 'default',
    tabStyle: 'standard',
    orientation: 'horizontal'
  },
  argTypes: {
    size: { options: ['small', 'default', 'large'], control: 'inline-radio' },
    tabStyle: { description: 'Figma **Style**', options: ['standard', 'pill'], control: 'inline-radio' },
    orientation: { options: ['horizontal', 'vertical'], control: 'inline-radio' },
    children: { control: false }
  },
  parameters: { ...sourceDocs('src/components/Tabs/Tabs.tsx', tabsSource), layout: 'centered' },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const Label = ({ children }: { children: string }) => (
  <p style={{ margin: '0 0 8px', fontSize: 12, color: '#6d6a6a' }}>{children}</p>
);

export const Playground: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Item label="Tab 1" active trailing={args.tabStyle === 'standard' ? calendarTrailing : undefined} />
      <Tabs.Item label="Tab 2" />
      <Tabs.Item label="Tab 3" />
    </Tabs>
  )
};

export const Standard: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <Label>Default (60px, Bold 16/28)</Label>
        <Tabs size="default">
          <Tabs.Item label="Tab 1" active trailing={calendarTrailing} />
          <Tabs.Item label="Tab 2" />
          <Tabs.Item label="Tab 3" />
        </Tabs>
      </div>
      <div>
        <Label>Small (36px, Bold 14/28)</Label>
        <Tabs size="small">
          <Tabs.Item label="Tab 1" active />
          <Tabs.Item label="Tab 2" />
          <Tabs.Item label="Tab 3" />
        </Tabs>
      </div>
    </div>
  )
};

export const Pill: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <Label>Large (Chip Large, 32px)</Label>
        <Tabs tabStyle="pill" size="large">
          <Tabs.Item label="Tab 1" active />
          <Tabs.Item label="Tab 2" />
          <Tabs.Item label="Tab 3" />
        </Tabs>
      </div>
      <div>
        <Label>Default (Chip Medium, 24px)</Label>
        <Tabs tabStyle="pill" size="default">
          <Tabs.Item label="Tab 1" active />
          <Tabs.Item label="Tab 2" />
          <Tabs.Item label="Tab 3" />
        </Tabs>
      </div>
      <div>
        <Label>Small (Chip Small, 16px)</Label>
        <Tabs tabStyle="pill" size="small">
          <Tabs.Item label="Tab 1" active />
          <Tabs.Item label="Tab 2" />
          <Tabs.Item label="Tab 3" />
        </Tabs>
      </div>
    </div>
  )
};

export const Vertical: Story = {
  render: () => (
    <Tabs orientation="vertical">
      <Tabs.Item label="Tab 1" active />
      <Tabs.Item label="Tab 2" />
      <Tabs.Item label="Tab 3" />
    </Tabs>
  )
};
