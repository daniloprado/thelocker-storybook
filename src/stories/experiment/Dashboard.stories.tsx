import type { Meta, StoryObj } from '@storybook/react';
import { Sidenav } from '../../components/Sidenav/Sidenav';
import { Icon } from '../../components/Icon/Icon';
import { TopBar } from '../../components/TopBar/TopBar';
import { Widget } from '../../components/Widget/Widget';
import { Table } from '../../components/Table/Table';
import { Chip } from '../../components/Chip/Chip';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';
import { Tabs } from '../../components/Tabs/Tabs';
import { Card } from '../../components/Card/Card';
import './Dashboard.css';

const AVATAR_BASE = 'https://i.pravatar.cc/80?img=';

const mainMenuItems = [
  { label: 'Overview', faCode: 'house', faStyle: 'regular' as const, state: 'active' as const },
  { label: 'Messages', faCode: 'envelope' },
  { label: 'Groups', faCode: 'comments' },
  { label: 'Challenges', faCode: 'trophy' },
  { label: 'Clients', faCode: 'users' },
  { label: 'Team', faCode: 'user-group' },
  { label: 'Business', faCode: 'chart-mixed' },
  { label: 'Master Libraries', faCode: 'folder-tree', arrow: true },
  { label: 'Scheduling', faCode: 'calendar', arrow: true },
];

const otherMenuItems = [
  { label: 'Add-ons', faCode: 'puzzle-piece' },
  { label: 'Settings', faCode: 'cog' },
];

function TrainerLogo() {
  return (
    <div className="sidenav-trainer__logo" aria-label="GO Fitness">
      <svg width="134" height="21" viewBox="0 0 134 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#dash-logo-clip)">
          <path d="M17.38 19.098c2.072-2.098 3.235-4.944 3.235-7.91 0-2.968-1.163-5.813-3.235-7.911C15.31 1.179 12.5 0 9.571 0 6.642 0 3.833 1.179 1.762 3.277l3.644 3.691a1.461 1.461 0 0 0 2.235-.807A4.39 4.39 0 0 1 9.57 5.449c1.172 0 2.296.471 3.124 1.311a4.55 4.55 0 0 1 1.294 3.164c0 .684-.155 1.351-.444 1.955-.355.741-.384 1.682.19 2.264l3.645 3.692z" fill="#297AFF"/>
          <path d="M15.462 20.883h-5.407a2.713 2.713 0 0 1-2.082-.874L.863 12.807A2.819 2.819 0 0 1 0 10.697V5.221l15.462 15.662z" fill="#34C2FF"/>
          <path d="M5.522 20.883H2.21C.99 20.883 0 19.881 0 18.645v-3.356l5.522 5.594z" fill="#34C2FF"/>
          <path d="M127.916 18.533c-.942 0-1.789-.164-2.54-.492a4.306 4.306 0 0 1-1.742-1.393 3.91 3.91 0 0 1-.655-2.07h1.987c.068.67.341 1.236.819 1.7.492.451 1.202.676 2.131.676.888 0 1.584-.218 2.09-.655.519-.451.778-1.025.778-1.721 0-.546-.15-.99-.451-1.331a2.384 2.384 0 0 0-1.126-.779 16.56 16.56 0 0 0-1.824-.573 17.34 17.34 0 0 1-2.274-.738 3.45 3.45 0 0 1-1.454-1.147c-.396-.533-.594-1.243-.594-2.13 0-.779.198-1.469.594-2.07a3.66 3.66 0 0 1 1.659-1.393c.724-.328 1.55-.492 2.479-.492 1.339 0 2.431.335 3.278 1.004.86.669 1.345 1.557 1.455 2.663h-2.049a2.11 2.11 0 0 0-.861-1.434c-.505-.422-1.174-.634-2.007-.634-.781 0-1.416.205-1.907.615-.492.396-.738.956-.738 1.68 0 .519.143.942.43 1.27.301.328.663.58 1.086.758.437.164 1.045.355 1.823.574.943.26 1.701.519 2.274.779.574.245 1.066.635 1.475 1.167.41.519.615 1.23.615 2.131 0 .696-.184 1.352-.553 1.967-.369.614-.915 1.113-1.639 1.495-.724.383-1.577.574-2.561.574zM115.892 18.533c-.942 0-1.789-.164-2.54-.492a4.306 4.306 0 0 1-1.741-1.393 3.91 3.91 0 0 1-.656-2.07h1.987c.069.67.342 1.236.82 1.7.491.451 1.202.676 2.13.676.888 0 1.585-.218 2.09-.655.519-.451.778-1.025.778-1.721 0-.546-.15-.99-.45-1.331a2.384 2.384 0 0 0-1.127-.779 16.56 16.56 0 0 0-1.823-.573 17.34 17.34 0 0 1-2.274-.738 3.45 3.45 0 0 1-1.455-1.147c-.396-.533-.594-1.243-.594-2.13 0-.779.198-1.469.594-2.07a3.66 3.66 0 0 1 1.659-1.393c.724-.328 1.55-.492 2.479-.492 1.339 0 2.431.335 3.278 1.004.861.669 1.345 1.557 1.455 2.663h-2.049a2.11 2.11 0 0 0-.86-1.434c-.506-.422-1.175-.634-2.008-.634-.781 0-1.416.205-1.906.615-.492.396-.738.956-.738 1.68 0 .519.143.942.43 1.27.3.328.662.58 1.086.758.436.164 1.044.355 1.823.574.942.26 1.7.519 2.274.779.573.245 1.065.635 1.475 1.167.41.519.615 1.23.615 2.131 0 .696-.184 1.352-.553 1.967-.369.614-.916 1.113-1.639 1.495-.724.383-1.578.574-2.561.574z" fill="white"/>
          <path d="M102.726 5.626v4.774h5.203v1.536h-5.203v4.917h5.818v1.536h-7.683V4.09h7.683v1.536h-5.818zM97.683 18.39h-1.864L88.321 7.019V18.39h-1.864V4.09h1.864l7.498 11.35V4.09h1.864V18.39zM84.162 4.111v1.516h-3.893V18.39h-1.864V5.627h-3.913V4.111h9.67zM72.196 4.111V18.39h-1.864V4.111h1.864zM68.08 4.111v1.516H61.873v4.814h5.04v1.516h-5.04V18.39h-1.864V4.111h8.072z" fill="white"/>
          <path d="M50.377 18.533c-1.352 0-2.595-.315-3.728-.943a6.645 6.645 0 0 1-2.705-3.643c-.655-1.134-.983-2.41-.983-3.831 0-1.42.328-2.69.983-3.81a6.645 6.645 0 0 1 2.705-2.643c1.133-.628 2.376-.943 3.728-.943 1.366 0 2.609.315 3.729.943a6.645 6.645 0 0 1 2.684 2.643c.655 1.12.983 2.39.983 3.81 0 1.42-.328 2.698-.983 3.831a6.645 6.645 0 0 1-2.684 2.7c-1.133.628-2.376.943-3.729.943zm0-3.729c1.025 0 1.83-.335 2.418-1.004.601-.669.901-1.564.901-2.684 0-1.147-.3-2.049-.901-2.704-.588-.67-1.393-1.004-2.418-1.004-1.038 0-1.85.335-2.438 1.004-.587.656-.881 1.557-.881 2.704 0 1.134.294 2.035.881 2.705.588.655 1.4.983 2.438.983z" fill="white"/>
          <path d="M37.167 8.699a2.096 2.096 0 0 0-.963-.881c-.396-.205-.867-.307-1.413-.307-.997 0-1.81.328-2.397.983-.574.656-.861 1.537-.861 2.643 0 1.243.308 2.192.922 2.848.628.642 1.537.963 2.725.963 1.407 0 2.41-.635 3.012-1.905h-4.036v-2.889h7.498v3.893a6.64 6.64 0 0 1-1.393 2.15 6.413 6.413 0 0 1-2.294 1.66c-.929.423-1.988.635-3.176.635-1.448 0-2.731-.308-3.851-.922a6.646 6.646 0 0 1-2.581-2.602c-.601-1.12-.902-2.397-.902-3.83 0-1.421.3-2.684.902-3.79a6.646 6.646 0 0 1 2.58-2.602c1.107-.628 2.384-.942 3.832-.942 1.816 0 3.319.437 4.507 1.311 1.188.874 1.926 2.069 2.213 3.585h-4.323z" fill="white"/>
        </g>
        <defs>
          <clipPath id="dash-logo-clip">
            <rect width="134" height="20.8831" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

/* ---------- KPI data ---------- */

const kpis = [
  { label: 'Active Clients', value: '128', change: '+12%', direction: 'up' as const, period: 'vs last month' },
  { label: 'Sessions This Week', value: '64', change: '+8%', direction: 'up' as const, period: 'vs last week' },
  { label: 'Revenue (MTD)', value: '$18.4k', change: '+23%', direction: 'up' as const, period: 'vs last month' },
  { label: 'Churn Rate', value: '3.2%', change: '-0.5%', direction: 'down' as const, period: 'vs last month' },
];

/* ---------- Client table data ---------- */

const clientColumns = [
  {
    key: 'client',
    title: 'Client',
    dataIndex: 'name',
    render: (_: unknown, record: Record<string, unknown>) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar size="small" src={record.avatar as string} />
        <span style={{ fontWeight: 600, fontSize: 13 }}>{record.name as string}</span>
      </div>
    ),
  },
  { key: 'plan', title: 'Plan', dataIndex: 'plan' },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    render: (val: unknown) => {
      const s = val as string;
      const color = s === 'Active' ? 'green' as const : s === 'Paused' ? 'orange' as const : 'red' as const;
      return <Chip label={s} color={color} size="small" />;
    },
  },
  { key: 'nextSession', title: 'Next Session', dataIndex: 'nextSession' },
  {
    key: 'progress',
    title: 'Progress',
    dataIndex: 'progress',
    render: (val: unknown) => {
      const pct = val as number;
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, height: 6, background: '#F3F3F3', borderRadius: 3, overflow: 'hidden', minWidth: 60 }}>
            <div style={{ width: `${pct}%`, height: '100%', background: pct >= 70 ? '#45C987' : pct >= 40 ? '#FFCA10' : '#FF5C6E', borderRadius: 3 }} />
          </div>
          <span style={{ fontSize: 12, color: '#6D6A6A', width: 32 }}>{pct}%</span>
        </div>
      );
    },
  },
];

const clientData = [
  { key: '1', name: 'Sarah Chen', avatar: `${AVATAR_BASE}1`, plan: 'Premium', status: 'Active', nextSession: 'Today, 2:00 PM', progress: 82 },
  { key: '2', name: 'Marcus Johnson', avatar: `${AVATAR_BASE}11`, plan: 'Standard', status: 'Active', nextSession: 'Today, 4:30 PM', progress: 65 },
  { key: '3', name: 'Emily Rodriguez', avatar: `${AVATAR_BASE}5`, plan: 'Premium', status: 'Paused', nextSession: '—', progress: 45 },
  { key: '4', name: 'David Kim', avatar: `${AVATAR_BASE}8`, plan: 'Standard', status: 'Active', nextSession: 'Tomorrow, 9:00 AM', progress: 91 },
  { key: '5', name: 'Jessica Taylor', avatar: `${AVATAR_BASE}9`, plan: 'Basic', status: 'Active', nextSession: 'Tomorrow, 11:00 AM', progress: 38 },
  { key: '6', name: 'Alex Murphy', avatar: `${AVATAR_BASE}12`, plan: 'Premium', status: 'Inactive', nextSession: '—', progress: 12 },
  { key: '7', name: 'Priya Patel', avatar: `${AVATAR_BASE}25`, plan: 'Standard', status: 'Active', nextSession: 'Aug 16, 8:00 AM', progress: 74 },
  { key: '8', name: 'Ryan Brooks', avatar: `${AVATAR_BASE}14`, plan: 'Basic', status: 'Active', nextSession: 'Aug 16, 3:00 PM', progress: 56 },
];

/* ---------- Activity feed data ---------- */

const activityFeed = [
  { color: '#45C987', text: 'Sarah Chen completed "Upper Body Strength" workout', time: '12 min ago' },
  { color: '#4094F7', text: 'New client Marcus Johnson signed up for Standard plan', time: '1 hr ago' },
  { color: '#FFCA10', text: 'Reminder: Emily Rodriguez subscription renews in 3 days', time: '2 hrs ago' },
  { color: '#FF5C6E', text: 'David Kim missed scheduled session yesterday', time: '4 hrs ago' },
  { color: '#45C987', text: 'Jessica Taylor achieved new personal record on deadlift', time: '5 hrs ago' },
  { color: '#4094F7', text: 'Team member Anna joined "Morning HIIT" group', time: '6 hrs ago' },
];

/* ---------- Dashboard component ---------- */

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__sidebar">
        <Sidenav layout="full">
          <TrainerLogo />

          <div className="sidenav-trainer__search">
            <span className="sidenav-trainer__search-icon">
              <Icon fa-code="magnifying-glass" size="medium" />
            </span>
            <span className="sidenav-trainer__search-label">Find a client</span>
          </div>

          <Sidenav.Main title="MAIN MENU">
            {mainMenuItems.map((item) => (
              <Sidenav.NavItem
                key={item.label}
                label={item.label}
                faCode={item.faCode}
                faStyle={item.faStyle}
                state={item.state ?? 'default'}
                showLabel
                arrow={Boolean(item.arrow)}
              />
            ))}
          </Sidenav.Main>
          <Sidenav.Main title="OTHER">
            {otherMenuItems.map((item) => (
              <Sidenav.NavItem
                key={item.label}
                label={item.label}
                faCode={item.faCode}
                showLabel
              />
            ))}
          </Sidenav.Main>
        </Sidenav>
      </div>

      <div className="dashboard__body">
        <TopBar
          userName="Jaron Lanier"
          avatarSrc={`${AVATAR_BASE}32`}
          showAiButton
          hasNotification
        />

        <div className="dashboard__heading">
          <div className="dashboard__heading-left">
            <h1 className="dashboard__heading-title">Overview</h1>
            <p className="dashboard__heading-subtitle">Thursday, August 14, 2026</p>
          </div>
          <Button variant="filled" size="medium" label="+ Add Client" />
        </div>

        <main className="dashboard__content">
          {/* KPI metrics */}
          <div className="dashboard__kpi-row">
            {kpis.map((kpi) => (
              <div className="dashboard__kpi" key={kpi.label}>
                <span className="dashboard__kpi-label">{kpi.label}</span>
                <span className="dashboard__kpi-value">{kpi.value}</span>
                <div className="dashboard__kpi-footer">
                  <span className={`dashboard__kpi-change dashboard__kpi-change--${kpi.direction}`}>
                    <Icon fa-code={kpi.direction === 'up' ? 'arrow-up' : 'arrow-down'} fa-style="solid" size="xxsmall" />
                    {' '}{kpi.change}
                  </span>
                  <span className="dashboard__kpi-period">{kpi.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs for view switching */}
          <Tabs size="default" orientation="horizontal">
            <Tabs.Item label="All Clients" active />
            <Tabs.Item label="Active" />
            <Tabs.Item label="Paused" />
            <Tabs.Item label="Inactive" />
          </Tabs>

          {/* Client table + Activity feed */}
          <div className="dashboard__columns">
            <Widget
              title="Clients"
              headerRight={<Button variant="outline" size="small" label="View All" />}
            >
              <Table
                columns={clientColumns}
                dataSource={clientData}
                size="small"
                striped
                pagination={{ pageSize: 5, defaultCurrent: 1 }}
              />
            </Widget>

            <Widget title="Recent Activity">
              <div>
                {activityFeed.map((item, i) => (
                  <div className="dashboard__activity-item" key={i}>
                    <span className="dashboard__activity-dot" style={{ background: item.color }} />
                    <span className="dashboard__activity-text">{item.text}</span>
                    <span className="dashboard__activity-time">{item.time}</span>
                  </div>
                ))}
              </div>
            </Widget>
          </div>

          {/* Upcoming cards */}
          <Widget
            title="Upcoming Challenges"
            headerRight={<Button variant="text" size="small" label="See All" />}
          >
            <div className="dashboard__cards-row">
              <Card
                size="stretch"
                title="30-Day Shred"
                description="High-intensity full body program starting Aug 20"
                tag="Starting Soon"
                imageSrc="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=200&fit=crop"
              />
              <Card
                size="stretch"
                title="Mobility Master"
                description="12-week flexibility and recovery challenge"
                tag="Enrolling"
                imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop"
              />
              <Card
                size="stretch"
                title="Strength Foundations"
                description="Beginner-friendly barbell fundamentals"
                tag="New"
                imageSrc="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=200&fit=crop"
              />
            </div>
          </Widget>
        </main>
      </div>
    </div>
  );
}

const meta: Meta<typeof Dashboard> = {
  title: 'Experiment/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {};
