import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import buttonSource from './Button.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons',
  component: Button,
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'medium',
    state: 'default',
    action: 'regular'
  },
  parameters: sourceDocs('src/components/Button/Button.tsx', buttonSource),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => {
    const actions = ['regular', 'destructive'] as const;
    const variants = ['filled', 'outline', 'text'] as const;
    const sizes = ['large', 'medium', 'small'] as const;
    const states = ['default', 'hover', 'active', 'focus', 'disabled'] as const;

    return (
      <div style={{ display: 'grid', gap: 28 }}>
        {actions.map((action) => (
          <section key={action}>
            <h3 style={{ margin: '0 0 10px', textTransform: 'capitalize' }}>{action}</h3>
            <div style={{ display: 'grid', gap: 14 }}>
              {variants.map((variant) => (
                <div key={`${action}-${variant}`}>
                  <div style={{ marginBottom: 8, fontSize: 12, textTransform: 'capitalize' }}>{variant}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, max-content)', gap: '10px 16px' }}>
                    {states.map((state) => (
                      <div key={`${action}-${variant}-${state}`} style={{ display: 'grid', gap: 8, justifyItems: 'start' }}>
                        {sizes.map((size) => (
                          <Button
                            key={`${action}-${variant}-${state}-${size}`}
                            action={action}
                            variant={variant}
                            state={state}
                            size={size}
                            label="Label"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }
};
