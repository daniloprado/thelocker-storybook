import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';
import { Chip } from '../Chip/Chip';
import { Input } from '../Input/Input';
import dialogSource from './Dialog.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  args: {
    title: 'Heading',
    variant: 'scroll',
    open: true,
    showOverlay: false,
    width: undefined,
  },
  argTypes: {
    variant: { control: 'radio', options: ['scroll', 'simple'] },
    onClose: { action: 'close' },
    footer: { control: false },
    headingLeft: { control: false },
    headingRight: { control: false },
    children: { control: false },
  },
  parameters: {
    ...sourceDocs('src/components/Dialog/Dialog.tsx', dialogSource),
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Playground: Story = {
  args: {
    variant: 'scroll',
    width: 800,
    children: (
      <div style={{ color: '#6d6a6a', fontSize: 14 }}>
        Dialog body content goes here. This area is scrollable when content exceeds the available height.
      </div>
    ),
    footer: (
      <>
        <Button label="Secondary" variant="outline" size="large" />
        <Button label="Primary" variant="filled" size="large" />
      </>
    ),
  },
};

export const Scroll: Story = {
  render: () => (
    <Dialog
      title="Create new program"
      variant="scroll"
      width={900}
      footer={
        <>
          <Button label="Cancel" variant="outline" size="large" />
          <Button label="Create" variant="filled" size="large" />
        </>
      }
    >
      <div style={{ display: 'grid', gap: 24 }}>
        <div style={{ display: 'grid', gap: 8 }}>
          <label style={{ fontSize: 14, fontWeight: 600, color: '#241f20' }}>
            Program name
          </label>
          <Input placeholder="Enter program name" size="large" />
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          <label style={{ fontSize: 14, fontWeight: 600, color: '#241f20' }}>
            Description
          </label>
          <Input placeholder="Enter a description" size="large" />
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          <label style={{ fontSize: 14, fontWeight: 600, color: '#241f20' }}>
            Duration (weeks)
          </label>
          <Input placeholder="e.g. 12" size="large" />
        </div>
      </div>
    </Dialog>
  ),
};

export const Simple: Story = {
  render: () => (
    <Dialog
      title="Assign client"
      variant="simple"
      footer={
        <>
          <Button label="Cancel" variant="outline" size="large" />
          <Button label="Assign" variant="filled" size="large" />
        </>
      }
    >
      <div style={{ display: 'grid', gap: 16 }}>
        <p style={{ margin: 0, fontSize: 14, color: '#6d6a6a' }}>
          Select a trainer to assign client to
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div style={{ display: 'grid', gap: 4 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#241f20' }}>
              Trainer
            </label>
            <Input placeholder="Select" size="middle" />
          </div>
          <div style={{ display: 'grid', gap: 4 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#241f20' }}>
              Client
            </label>
            <Input placeholder="Select" size="middle" />
          </div>
        </div>
      </div>
    </Dialog>
  ),
};

export const WithOverlay: Story = {
  render: () => (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Dialog
        title="Confirm action"
        variant="simple"
        showOverlay
        footer={
          <>
            <Button label="Cancel" variant="outline" size="large" />
            <Button label="Confirm" variant="filled" size="large" />
          </>
        }
      >
        <p style={{ margin: 0, fontSize: 14, color: '#6d6a6a' }}>
          Are you sure you want to proceed? This action cannot be undone.
        </p>
      </Dialog>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const HeadingSlots: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 40 }}>
      <Dialog
        title="Client overview"
        variant="scroll"
        width={900}
        headingLeft={
          <Chip label="Active" color="green" size="small" />
        }
        headingRight={
          <div style={{ display: 'flex', gap: 8 }}>
            <Button label="Export" variant="outline" size="small" />
            <Button label="Edit" variant="outline" size="small" />
          </div>
        }
        footer={
          <>
            <Button label="Close" variant="outline" size="large" />
          </>
        }
      >
        <p style={{ margin: 0, fontSize: 14, color: '#6d6a6a' }}>
          Both heading slots populated: a Chip on the left and action buttons on the right.
        </p>
      </Dialog>

      <Dialog
        title="Schedule session"
        variant="scroll"
        width={900}
        headingLeft={
          <span style={{ fontSize: 14, color: '#6d6a6a' }}>Step 1 of 3</span>
        }
        footer={
          <>
            <Button label="Back" variant="outline" size="large" />
            <Button label="Next" variant="filled" size="large" />
          </>
        }
      >
        <p style={{ margin: 0, fontSize: 14, color: '#6d6a6a' }}>
          Only the left heading slot is used, showing a step indicator next to the title.
        </p>
      </Dialog>

      <Dialog
        title="Notifications"
        variant="scroll"
        width={900}
        headingRight={
          <Button label="Mark all read" variant="text" size="small" />
        }
        footer={
          <>
            <Button label="Done" variant="outline" size="large" />
          </>
        }
      >
        <p style={{ margin: 0, fontSize: 14, color: '#6d6a6a' }}>
          Only the right heading slot is used, placing an action button before the close icon.
        </p>
      </Dialog>
    </div>
  ),
};

export const DestructiveAction: Story = {
  render: () => (
    <Dialog
      title="Delete program"
      variant="simple"
      footer={
        <>
          <Button label="Cancel" variant="outline" size="large" />
          <Button label="Delete" variant="filled" size="large" action="destructive" />
        </>
      }
    >
      <p style={{ margin: 0, fontSize: 14, color: '#6d6a6a' }}>
        Are you sure you want to delete this program? This action is permanent and cannot be reversed.
      </p>
    </Dialog>
  ),
};
