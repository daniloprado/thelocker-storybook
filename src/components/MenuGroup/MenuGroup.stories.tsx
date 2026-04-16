import type { Meta, StoryObj } from '@storybook/react';
import { MenuGroup } from './MenuGroup';
import menuGroupSource from './MenuGroup.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof MenuGroup> = {
  title: 'Components/Menu Group',
  component: MenuGroup,
  subcomponents: {
    Heading: MenuGroup.Heading,
    Item: MenuGroup.Item
  },
  parameters: sourceDocs('src/components/MenuGroup/MenuGroup.tsx', menuGroupSource),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MenuGroup>;

export const Playground: Story = {
  render: () => (
    <MenuGroup>
      <MenuGroup.Item label="Menu item" />
      <MenuGroup.Item label="Menu item" />
      <MenuGroup.Item label="Menu item" />
      <MenuGroup.Item label="Menu item" />
      <MenuGroup.Heading heading="Sub-heading" />
      <MenuGroup.Item label="Menu item" />
      <MenuGroup.Item label="Menu item" />
      <MenuGroup.Item label="Menu item" />
      <MenuGroup.Item label="Menu item" />
    </MenuGroup>
  )
};

export const ExampleFromDesign: Story = {
  name: 'Example',
  render: () => (
    <MenuGroup>
      <MenuGroup.Item label="Edit" />
      <MenuGroup.Item label="Delete" />
      <MenuGroup.Heading heading="Style" />
      <MenuGroup.Item label="Line chart" state="selected" />
      <MenuGroup.Item label="Bar chart" />
      <MenuGroup.Item label="Number" />
    </MenuGroup>
  )
};
