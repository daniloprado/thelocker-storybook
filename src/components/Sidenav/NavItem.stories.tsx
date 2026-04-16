import type { Meta, StoryObj } from '@storybook/react';
import { Sidenav } from './Sidenav';
import sidenavSource from './Sidenav.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Sidenav.NavItem> = {
  title: 'Components/Sidenav/Nav Item',
  component: Sidenav.NavItem,
  args: {
    label: 'Clients',
    state: 'default',
    faCode: 'users',
    faStyle: 'regular',
    arrow: false,
    showLabel: true,
    disabled: false
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'active']
    },
    faStyle: {
      control: 'select',
      options: ['solid', 'regular', 'light']
    },
    faCode: {
      control: 'text'
    },
    arrow: {
      control: 'boolean'
    },
    showLabel: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    onClick: {
      action: 'clicked'
    }
  },
  parameters: {
    ...sourceDocs(
      'src/components/Sidenav/Sidenav.tsx',
      sidenavSource,
      "import { Sidenav } from 'thelocker-storybook';\n\n<Sidenav.NavItem label=\"Clients\" faCode=\"users\" />"
    ),
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Sidenav.NavItem>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 220, background: '#110e0f', padding: 16, borderRadius: 8 }}>
      <Sidenav.NavItem {...args} />
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div style={{ width: 220, background: '#110e0f', padding: 16, borderRadius: 8, display: 'grid', gap: 12 }}>
      <Sidenav.NavItem label="Clients" state="default" faCode="users" />
      <Sidenav.NavItem label="Clients" state="hover" faCode="users" />
      <Sidenav.NavItem label="Clients" state="active" faCode="users" />
    </div>
  )
};
