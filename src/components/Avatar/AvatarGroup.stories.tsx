import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from './AvatarGroup';
import avatarGroupSource from './AvatarGroup.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const SAMPLE_AVATAR = 'https://i.pravatar.cc/80?img=32';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/Avatar/Avatar Group',
  component: AvatarGroup,
  args: {
    title: 'Name Surname',
    subtitle: 'Subtitle',
    showSubtitle: true,
    src: SAMPLE_AVATAR,
    avatarSize: 'large'
  },
  parameters: sourceDocs(
    'src/components/Avatar/AvatarGroup.tsx',
    avatarGroupSource,
    `import { AvatarGroup } from 'thelocker-storybook';

<AvatarGroup
  title="Jane Cooper"
  subtitle="Product Designer"
  src="/avatar.jpg"
/>`
  ),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Playground: Story = {};

export const WithFallback: Story = {
  args: {
    title: 'Jane Cooper',
    subtitle: 'Product Designer',
    src: undefined
  }
};

export const NoSubtitle: Story = {
  args: {
    title: 'Jane Cooper',
    showSubtitle: false,
    src: SAMPLE_AVATAR
  }
};

export const Matrix: Story = {
  render: () => {
    const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'] as const;

    return (
      <div style={{ display: 'grid', gap: 20 }}>
        {sizes.map((size) => (
          <AvatarGroup
            key={size}
            title="Jane Cooper"
            subtitle={`Avatar size: ${size}`}
            avatarSize={size}
            src={SAMPLE_AVATAR}
          />
        ))}
        <AvatarGroup
          title="No Image User"
          subtitle="Fallback initials"
        />
      </div>
    );
  }
};
