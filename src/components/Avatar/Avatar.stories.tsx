import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import avatarSource from './Avatar.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const SAMPLE_IMAGE = 'https://i.pravatar.cc/80?img=32';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    size: 'large',
    type: 'image',
    shape: 'circle',
    src: SAMPLE_IMAGE,
    alt: 'Jane Cooper',
    fallback: 'Jane Cooper'
  },
  parameters: sourceDocs('src/components/Avatar/Avatar.tsx', avatarSource),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => {
    const sizes = ['small', 'medium', 'large'] as const;
    const types = ['image', 'placeholder', 'initials'] as const;

    const typeLabel: Record<string, string> = {
      image: 'Image',
      placeholder: 'Placeholder',
      initials: 'Initials'
    };

    return (
      <div style={{ display: 'grid', gap: 28 }}>
        {types.map((type) => (
          <section key={type}>
            <div style={{ marginBottom: 8, fontSize: 12, color: '#6d6a6a' }}>{typeLabel[type]}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {sizes.map((size) => (
                <Avatar
                  key={`${type}-${size}`}
                  type={type}
                  size={size}
                  src={type === 'image' ? SAMPLE_IMAGE : undefined}
                  fallback="AB"
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }
};

export const Shapes: Story = {
  render: () => {
    const shapes = ['circle', 'square', 'rounded'] as const;

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {shapes.map((shape) => (
          <Avatar key={shape} size="large" shape={shape} src={SAMPLE_IMAGE} alt={shape} />
        ))}
      </div>
    );
  }
};
