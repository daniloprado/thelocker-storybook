import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import iconSource from './Icon.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  args: {
    'fa-code': 'plus',
    'fa-style': 'regular',
    size: 'medium'
  },
  argTypes: {
    'fa-code': {
      control: 'text'
    },
    'fa-style': {
      control: 'select',
      options: ['solid', 'regular', 'light']
    },
    size: {
      control: 'select',
      options: ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge']
    }
  },
  parameters: sourceDocs('src/components/Icon/Icon.tsx', iconSource),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Playground: Story = {};

export const Styles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <div style={{ display: 'grid', gap: 6, justifyItems: 'center' }}>
        <Icon fa-code="user" fa-style="solid" size="large" />
        <span>solid</span>
      </div>
      <div style={{ display: 'grid', gap: 6, justifyItems: 'center' }}>
        <Icon fa-code="user" fa-style="regular" size="large" />
        <span>regular</span>
      </div>
      <div style={{ display: 'grid', gap: 6, justifyItems: 'center' }}>
        <Icon fa-code="user" fa-style="light" size="large" />
        <span>light</span>
      </div>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Icon fa-code="plus" size="xxsmall" />
      <Icon fa-code="plus" size="xsmall" />
      <Icon fa-code="plus" size="small" />
      <Icon fa-code="plus" size="medium" />
      <Icon fa-code="plus" size="large" />
      <Icon fa-code="plus" size="xlarge" />
    </div>
  )
};
