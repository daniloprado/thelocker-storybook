import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../Icon/Icon';
import { Sidenav } from './Sidenav';
import sidenavSource from './Sidenav.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const mainMenuItems = [
  { label: 'Overview', faCode: 'house', state: 'active' as const },
  { label: 'Messages', faCode: 'envelope' },
  { label: 'Groups', faCode: 'comments' },
  { label: 'Challenges', faCode: 'trophy' },
  { label: 'Clients', faCode: 'users' },
  { label: 'Team', faCode: 'user-group' },
  { label: 'Payments', faCode: 'credit-card' },
  { label: 'Master Libraries', faCode: 'folder-tree', arrow: true },
  { label: 'Scheduling', faCode: 'calendar', arrow: true }
];

const meta: Meta<typeof Sidenav> = {
  title: 'Components/Sidenav',
  component: Sidenav,
  subcomponents: {
    Main: Sidenav.Main,
    NavItem: Sidenav.NavItem
  },
  args: {
    layout: 'full'
  },
  parameters: {
    ...sourceDocs(
      'src/components/Sidenav/Sidenav.tsx',
      sidenavSource,
      "import { Sidenav } from 'thelocker-storybook';\n\n<Sidenav layout=\"full\">\n  <Sidenav.Main title=\"Main\">\n    <Sidenav.NavItem label=\"Overview\" faCode=\"house\" state=\"active\" />\n  </Sidenav.Main>\n</Sidenav>"
    ),
    layout: 'padded'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Sidenav>;

const trainerMainItems = [
  { label: 'Overview', faCode: 'house', faStyle: 'regular' as const, state: 'active' as const },
  { label: 'Messages', faCode: 'envelope' },
  { label: 'Groups', faCode: 'comments' },
  { label: 'Challenges', faCode: 'trophy' },
  { label: 'Clients', faCode: 'users' },
  { label: 'Team', faCode: 'user-group' },
  { label: 'Payments', faCode: 'credit-card' },
  { label: 'Master Libraries', faCode: 'folder-tree', arrow: true },
  { label: 'Scheduling', faCode: 'calendar', arrow: true }
];

const trainerOtherItems = [
  { label: 'Setup Guide', faCode: 'book-open-cover' },
  { label: 'Add-ons', faCode: 'puzzle-piece' },
  { label: 'Settings', faCode: 'cog' }
];

function TrainerLogo() {
  return (
    <div className="sidenav-trainer__logo" aria-label="GO Fitness">
      <svg width="134" height="21" viewBox="0 0 134 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#sidenav-logo-clip)">
          <path d="M17.38 19.098c2.072-2.098 3.235-4.944 3.235-7.91 0-2.968-1.163-5.813-3.235-7.911C15.31 1.179 12.5 0 9.571 0 6.642 0 3.833 1.179 1.762 3.277l3.644 3.691a1.461 1.461 0 0 0 2.235-.807A4.39 4.39 0 0 1 9.57 5.449c1.172 0 2.296.471 3.124 1.311a4.55 4.55 0 0 1 1.294 3.164c0 .684-.155 1.351-.444 1.955-.355.741-.384 1.682.19 2.264l3.645 3.692z" fill="#297AFF"/>
          <path d="M15.462 20.883h-5.407a2.713 2.713 0 0 1-2.082-.874L.863 12.807A2.819 2.819 0 0 1 0 10.697V5.221l15.462 15.662z" fill="#34C2FF"/>
          <path d="M5.522 20.883H2.21C.99 20.883 0 19.881 0 18.645v-3.356l5.522 5.594z" fill="#34C2FF"/>
          <path d="M127.916 18.533c-.942 0-1.789-.164-2.54-.492a4.306 4.306 0 0 1-1.742-1.393 3.91 3.91 0 0 1-.655-2.07h1.987c.068.67.341 1.236.819 1.7.492.451 1.202.676 2.131.676.888 0 1.584-.218 2.09-.655.519-.451.778-1.025.778-1.721 0-.546-.15-.99-.451-1.331a2.384 2.384 0 0 0-1.126-.779 16.56 16.56 0 0 0-1.824-.573 17.34 17.34 0 0 1-2.274-.738 3.45 3.45 0 0 1-1.454-1.147c-.396-.533-.594-1.243-.594-2.13 0-.779.198-1.469.594-2.07a3.66 3.66 0 0 1 1.659-1.393c.724-.328 1.55-.492 2.479-.492 1.339 0 2.431.335 3.278 1.004.86.669 1.345 1.557 1.455 2.663h-2.049a2.11 2.11 0 0 0-.861-1.434c-.505-.422-1.174-.634-2.007-.634-.781 0-1.416.205-1.907.615-.492.396-.738.956-.738 1.68 0 .519.143.942.43 1.27.301.328.663.58 1.086.758.437.164 1.045.355 1.823.574.943.26 1.701.519 2.274.779.574.245 1.066.635 1.475 1.167.41.519.615 1.23.615 2.131 0 .696-.184 1.352-.553 1.967-.369.614-.915 1.113-1.639 1.495-.724.383-1.577.574-2.561.574zM115.892 18.533c-.942 0-1.789-.164-2.54-.492a4.306 4.306 0 0 1-1.741-1.393 3.91 3.91 0 0 1-.656-2.07h1.987c.069.67.342 1.236.82 1.7.491.451 1.202.676 2.13.676.888 0 1.585-.218 2.09-.655.519-.451.778-1.025.778-1.721 0-.546-.15-.99-.45-1.331a2.384 2.384 0 0 0-1.127-.779 16.56 16.56 0 0 0-1.823-.573 17.34 17.34 0 0 1-2.274-.738 3.45 3.45 0 0 1-1.455-1.147c-.396-.533-.594-1.243-.594-2.13 0-.779.198-1.469.594-2.07a3.66 3.66 0 0 1 1.659-1.393c.724-.328 1.55-.492 2.479-.492 1.339 0 2.431.335 3.278 1.004.861.669 1.345 1.557 1.455 2.663h-2.049a2.11 2.11 0 0 0-.86-1.434c-.506-.422-1.175-.634-2.008-.634-.781 0-1.416.205-1.906.615-.492.396-.738.956-.738 1.68 0 .519.143.942.43 1.27.3.328.662.58 1.086.758.436.164 1.044.355 1.823.574.942.26 1.7.519 2.274.779.573.245 1.065.635 1.475 1.167.41.519.615 1.23.615 2.131 0 .696-.184 1.352-.553 1.967-.369.614-.916 1.113-1.639 1.495-.724.383-1.578.574-2.561.574z" fill="white"/>
          <path d="M102.726 5.626v4.774h5.203v1.536h-5.203v4.917h5.818v1.536h-7.683V4.09h7.683v1.536h-5.818zM97.683 18.39h-1.864L88.321 7.019V18.39h-1.864V4.09h1.864l7.498 11.35V4.09h1.864V18.39zM84.162 4.111v1.516h-3.893V18.39h-1.864V5.627h-3.913V4.111h9.67zM72.196 4.111V18.39h-1.864V4.111h1.864zM68.08 4.111v1.516H61.873v4.814h5.04v1.516h-5.04V18.39h-1.864V4.111h8.072z" fill="white"/>
          <path d="M50.377 18.533c-1.352 0-2.595-.315-3.728-.943a6.645 6.645 0 0 1-2.705-3.643c-.655-1.134-.983-2.41-.983-3.831 0-1.42.328-2.69.983-3.81a6.645 6.645 0 0 1 2.705-2.643c1.133-.628 2.376-.943 3.728-.943 1.366 0 2.609.315 3.729.943a6.645 6.645 0 0 1 2.684 2.643c.655 1.12.983 2.39.983 3.81 0 1.42-.328 2.698-.983 3.831a6.645 6.645 0 0 1-2.684 2.7c-1.133.628-2.376.943-3.729.943zm0-3.729c1.025 0 1.83-.335 2.418-1.004.601-.669.901-1.564.901-2.684 0-1.147-.3-2.049-.901-2.704-.588-.67-1.393-1.004-2.418-1.004-1.038 0-1.85.335-2.438 1.004-.587.656-.881 1.557-.881 2.704 0 1.134.294 2.035.881 2.705.588.655 1.4.983 2.438.983z" fill="white"/>
          <path d="M37.167 8.699a2.096 2.096 0 0 0-.963-.881c-.396-.205-.867-.307-1.413-.307-.997 0-1.81.328-2.397.983-.574.656-.861 1.537-.861 2.643 0 1.243.308 2.192.922 2.848.628.642 1.537.963 2.725.963 1.407 0 2.41-.635 3.012-1.905h-4.036v-2.889h7.498v3.893a6.64 6.64 0 0 1-1.393 2.15 6.413 6.413 0 0 1-2.294 1.66c-.929.423-1.988.635-3.176.635-1.448 0-2.731-.308-3.851-.922a6.646 6.646 0 0 1-2.581-2.602c-.601-1.12-.902-2.397-.902-3.83 0-1.421.3-2.684.902-3.79a6.646 6.646 0 0 1 2.58-2.602c1.107-.628 2.384-.942 3.832-.942 1.816 0 3.319.437 4.507 1.311 1.188.874 1.926 2.069 2.213 3.585h-4.323z" fill="white"/>
        </g>
        <defs>
          <clipPath id="sidenav-logo-clip">
            <rect width="134" height="20.8831" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MainMenu(layout: 'full' | 'mini') {
  return (
    <Sidenav.Main title="Main">
      {mainMenuItems.map((item) => (
        <Sidenav.NavItem
          key={item.label}
          label={item.label}
          faCode={item.faCode}
          state={item.state ?? 'default'}
          showLabel={layout === 'full'}
          arrow={Boolean(item.arrow && layout === 'full')}
        />
      ))}
    </Sidenav.Main>
  );
}

export const Playground: Story = {
  render: (args) => (
    <Sidenav {...args}>
      <TrainerLogo />

      <div className="sidenav-trainer__search">
        <span className="sidenav-trainer__search-icon">
          <Icon fa-code="magnifying-glass" size="medium" />
        </span>
        {(args.layout ?? 'full') === 'full' && (
          <span className="sidenav-trainer__search-label">Find a client</span>
        )}
      </div>

      {MainMenu(args.layout ?? 'full')}
    </Sidenav>
  )
};

export const Mini: Story = {
  args: {
    layout: 'mini'
  },
  render: (args) => (
    <Sidenav {...args}>
      <p style={{
        margin: 0,
        color: '#fff',
        fontFamily: "'Mulish', sans-serif",
        fontWeight: 900,
        fontSize: 14,
        lineHeight: '16px',
        width: '100%',
        textAlign: 'center'
      }}>
        G
      </p>

      <div className="sidenav-trainer__search" style={{ justifyContent: 'center' }}>
        <span className="sidenav-trainer__search-icon">
          <Icon fa-code="magnifying-glass" size="medium" />
        </span>
      </div>

      {MainMenu('mini')}
    </Sidenav>
  )
};

export const NavItemStates: Story = {
  render: () => (
    <div style={{ background: '#110e0f', borderRadius: 8, padding: 16, width: 220, display: 'grid', gap: 12 }}>
      <Sidenav.NavItem label="Clients" faCode="users" state="default" />
      <Sidenav.NavItem label="Clients" faCode="users" state="hover" />
      <Sidenav.NavItem label="Clients" faCode="users" state="active" />
    </div>
  )
};

export const Trainer: Story = {
  args: {
    layout: 'full'
  },
  argTypes: {
    layout: {
      control: 'radio',
      options: ['full', 'mini']
    }
  },
  parameters: {
    controls: {
      include: ['layout']
    }
  },
  render: (args) => (
    <Sidenav {...args}>
      <TrainerLogo />

      <div className="sidenav-trainer__search">
        <span className="sidenav-trainer__search-icon">
          <Icon fa-code="magnifying-glass" size="medium" />
        </span>
        <span className="sidenav-trainer__search-label">Find a client</span>
      </div>

      <Sidenav.Main title="MAIN MENU">
        {trainerMainItems.map((item) => (
          <Sidenav.NavItem
            key={item.label}
            label={item.label}
            state={item.state ?? 'default'}
            faCode={item.faCode}
            faStyle={item.faStyle}
            arrow={item.arrow ?? false}
          />
        ))}
      </Sidenav.Main>

      <Sidenav.Main title="OTHER">
        {trainerOtherItems.map((item) => (
          <Sidenav.NavItem
            key={item.label}
            label={item.label}
            faCode={item.faCode}
          />
        ))}
      </Sidenav.Main>
    </Sidenav>
  )
};
