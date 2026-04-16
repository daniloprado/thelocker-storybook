import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './MenuItem';
import menuItemSource from './MenuItem.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/Menu Item',
  component: MenuItem,
  args: {
    label: 'Menu item',
    state: 'default',
    showLeadingIcon: false,
    leadingIconCode: 'arrow-right'
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'selected', 'disabled', 'critical']
    },
    showLeadingIcon: {
      control: 'boolean'
    },
    leadingIconCode: {
      control: 'text'
    }
  },
  parameters: sourceDocs('src/components/MenuItem/MenuItem.tsx', menuItemSource),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 204 }}>
      <MenuItem {...args} />
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div style={{ width: 204, display: 'grid', gap: 4 }}>
      <MenuItem state="default" label="Menu item" />
      <MenuItem state="hover" label="Menu item" />
      <MenuItem state="selected" label="Menu item" />
      <MenuItem state="disabled" label="Menu item" />
      <MenuItem state="critical" label="Menu item" />
    </div>
  )
};

export const WithLeadingIcon: Story = {
  render: () => (
    <div style={{ width: 204, display: 'grid', gap: 4 }}>
      <MenuItem state="default" label="Menu item" showLeadingIcon leadingIconCode="arrow-right" />
      <MenuItem state="selected" label="Menu item" showLeadingIcon leadingIconCode="arrow-right" />
    </div>
  )
};
