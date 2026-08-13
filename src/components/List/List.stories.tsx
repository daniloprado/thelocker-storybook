import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import source from './List.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    ...sourceDocs('src/components/List/List.tsx', source),
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof List>;

export const Playground: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <List>
        <List.Item label="Profile" secondaryText="View" />
        <List.Item label="Settings" secondaryText="Edit" />
        <List.Item label="Notifications" secondaryText="3 new" />
      </List>
    </div>
  )
};

export const UserList: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <List>
        <List.Item
          avatar="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23c5c3c3'/%3E%3C/svg%3E"
          label="Jane Cooper"
          secondaryText="Product Designer"
          showArrow
          onClick={() => {}}
        />
        <List.Item
          avatar="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23c5c3c3'/%3E%3C/svg%3E"
          label="Alex Johnson"
          secondaryText="Developer"
          showArrow
          onClick={() => {}}
        />
        <List.Item
          avatar="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23c5c3c3'/%3E%3C/svg%3E"
          label="Sam Williams"
          secondaryText="Coach"
          showArrow
          onClick={() => {}}
        />
      </List>
    </div>
  )
};

export const Mixed: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <List>
        <List.Item label="Total sessions" secondaryText="24" />
        <List.Item
          avatar="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23c5c3c3'/%3E%3C/svg%3E"
          label="Jane Cooper"
          secondaryText="Product Designer"
          showArrow
          onClick={() => {}}
        />
        <List.Item label="Completion rate" secondaryText="87%" />
      </List>
    </div>
  )
};
