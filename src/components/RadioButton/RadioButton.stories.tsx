import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';
import radioButtonSource from './RadioButton.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  args: {
    label: 'Radio label',
    disabled: false,
  },
  parameters: {
    ...sourceDocs('src/components/RadioButton/RadioButton.tsx', radioButtonSource),
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '16px 32px', alignItems: 'center' }}>
      <span style={{ fontSize: 12, color: '#6d6a6a' }}>Unselected</span>
      <span style={{ fontSize: 12, color: '#6d6a6a' }}>Selected</span>
      <span style={{ fontSize: 12, color: '#6d6a6a' }}>Disabled</span>

      <RadioButton />
      <RadioButton defaultChecked />
      <RadioButton disabled />

      <RadioButton label="Unselected" />
      <RadioButton label="Selected" defaultChecked />
      <RadioButton label="Disabled" disabled />

      <div />
      <div />
      <RadioButton label="Disabled selected" defaultChecked disabled />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <RadioButton
          name="example"
          label="Option 1"
          checked={value === 'option1'}
          onChange={() => setValue('option1')}
        />
        <RadioButton
          name="example"
          label="Option 2"
          checked={value === 'option2'}
          onChange={() => setValue('option2')}
        />
        <RadioButton
          name="example"
          label="Option 3"
          checked={value === 'option3'}
          onChange={() => setValue('option3')}
        />
      </div>
    );
  },
};
