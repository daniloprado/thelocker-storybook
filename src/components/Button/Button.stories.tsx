import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import type { ButtonAppearance, ButtonVariant } from './Button';
import buttonSource from './Button.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons',
  component: Button,
  args: {
    label: 'Label',
    variant: 'secondary',
    appearance: 'filled',
    size: 'large',
    state: 'default',
    leadingIcon: false,
    trailingIcon: false,
    leadingIconCode: 'plus',
    trailingIconCode: 'plus'
  },
  argTypes: {
    variant: {
      description: 'Figma **Style**',
      options: ['primary', 'secondary', 'neutral', 'destructive'],
      control: 'select'
    },
    appearance: {
      description: 'Figma **Type**',
      options: ['filled', 'outline', 'text', 'ghost'],
      control: 'select'
    },
    size: { options: ['large', 'medium', 'small'], control: 'inline-radio' },
    state: { options: ['default', 'hover', 'active', 'focus', 'disabled'], control: 'inline-radio' },
    leading: { control: false },
    trailing: { control: false }
  },
  parameters: sourceDocs('src/components/Button/Button.tsx', buttonSource),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Button>;

/** Style × Type combinations that exist in the Figma set. */
const COMBOS: Array<{ variant: ButtonVariant; appearance: ButtonAppearance }> = [
  { variant: 'secondary', appearance: 'filled' },
  { variant: 'primary', appearance: 'filled' },
  { variant: 'destructive', appearance: 'filled' },
  { variant: 'neutral', appearance: 'outline' },
  { variant: 'destructive', appearance: 'outline' },
  { variant: 'neutral', appearance: 'ghost' },
  { variant: 'neutral', appearance: 'text' },
  { variant: 'primary', appearance: 'text' },
  { variant: 'destructive', appearance: 'text' }
];

const SIZES = ['large', 'medium', 'small'] as const;
const STATES = ['default', 'hover', 'active', 'focus', 'disabled'] as const;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 28 }}>
      {COMBOS.map(({ variant, appearance }) => (
        <section key={`${variant}-${appearance}`}>
          <div style={{ marginBottom: 8, fontSize: 12, textTransform: 'capitalize' }}>
            {variant} / {appearance}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, max-content)', gap: '10px 24px' }}>
            {STATES.map((state) => (
              <div key={state} style={{ display: 'grid', gap: 8, justifyItems: 'start' }}>
                <div style={{ fontSize: 11, color: '#6d6a6a', textTransform: 'capitalize' }}>{state}</div>
                {SIZES.map((size) => (
                  <Button
                    key={size}
                    variant={variant}
                    appearance={appearance}
                    state={state}
                    size={size}
                    label="Label"
                  />
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
      {COMBOS.map(({ variant, appearance }) => (
        <div key={`${variant}-${appearance}`} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {SIZES.map((size) => (
            <Button
              key={size}
              variant={variant}
              appearance={appearance}
              size={size}
              label="Label"
              leadingIcon
              trailingIcon
              trailingIconCode="arrow-right"
            />
          ))}
        </div>
      ))}
    </div>
  )
};

export const Styles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button variant="secondary" appearance="filled" label="Secondary" />
      <Button variant="primary" appearance="filled" label="Primary" />
      <Button variant="destructive" appearance="filled" label="Destructive" />
      <Button variant="neutral" appearance="outline" label="Outline" />
      <Button variant="neutral" appearance="ghost" label="Ghost" />
      <Button variant="neutral" appearance="text" label="Text" />
      <Button variant="primary" appearance="text" label="Link" />
    </div>
  )
};
