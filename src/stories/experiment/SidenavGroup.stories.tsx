import type { Meta, StoryObj } from '@storybook/react';
import { Sidenav } from '../../components/Sidenav/Sidenav';

const meta: Meta<typeof Sidenav.Group> = {
  title: 'Experiment/Sidenav 2.0/Sidenav Group',
  component: Sidenav.Group,
  args: {
    title: 'OTHER'
  },
  argTypes: {
    title: { control: 'text' }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Sidenav.Group>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 220, background: '#110e0f', padding: 16, borderRadius: 8 }}>
      <Sidenav.Group {...args}>
        <Sidenav.NavItem label="Clients" faCode="users" />
        <Sidenav.NavItem label="Clients" faCode="users" />
        <Sidenav.NavItem label="Clients" faCode="users" />
        <Sidenav.NavItem label="Clients" faCode="users" />
        <Sidenav.NavItem label="Clients" faCode="users" />
      </Sidenav.Group>
    </div>
  )
};

export const WithoutTitle: Story = {
  render: () => (
    <div style={{ width: 220, background: '#110e0f', padding: 16, borderRadius: 8 }}>
      <Sidenav.Group>
        <Sidenav.NavItem label="Add-ons" faCode="puzzle-piece" />
        <Sidenav.NavItem label="Settings" faCode="gear" arrow />
      </Sidenav.Group>
    </div>
  )
};

export const MixedStates: Story = {
  render: () => (
    <div style={{ width: 220, background: '#110e0f', padding: 16, borderRadius: 8 }}>
      <Sidenav.Group title="OTHER">
        <Sidenav.NavItem label="Setup Guide" faCode="book-open-cover" />
        <Sidenav.NavItem label="Add-ons" faCode="puzzle-piece" state="active2" />
        <Sidenav.NavItem label="Settings" faCode="gear" arrow />
      </Sidenav.Group>
    </div>
  )
};
