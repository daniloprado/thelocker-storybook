import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import type { TableColumn } from './Table';
import tableSource from './Table.tsx?raw';
import { sourceDocs } from '../../stories/utils/sourceDocs';

const columns: TableColumn[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'age', title: 'Age', dataIndex: 'age', align: 'right' },
  { key: 'address', title: 'Address', dataIndex: 'address' }
];

const dataSource = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park' },
  { key: '4', name: 'Jane Doe', age: 29, address: 'Toronto King Street' },
  { key: '5', name: 'Maria Silva', age: 37, address: 'Lisbon Downtown' },
  { key: '6', name: 'Liam Smith', age: 45, address: 'Dublin Grand Canal' }
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  args: {
    columns,
    dataSource,
    size: 'middle',
    bordered: true,
    loading: false,
    striped: false,
    pagination: { pageSize: 5, defaultCurrent: 1 }
  },
  argTypes: {
    columns: { control: false },
    dataSource: { control: false }
  },
  parameters: sourceDocs('src/components/Table/Table.tsx', tableSource),
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Playground: Story = {};

export const Basic: Story = {
  args: {
    bordered: false,
    pagination: false
  }
};

export const BorderedAndStriped: Story = {
  args: {
    bordered: true,
    striped: true,
    pagination: false
  }
};

export const Loading: Story = {
  args: {
    loading: true
  }
};

export const Empty: Story = {
  args: {
    dataSource: [],
    pagination: false
  }
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Table columns={columns} dataSource={dataSource.slice(0, 3)} size="small" pagination={false} bordered />
      <Table columns={columns} dataSource={dataSource.slice(0, 3)} size="middle" pagination={false} bordered />
      <Table columns={columns} dataSource={dataSource.slice(0, 3)} size="large" pagination={false} bordered />
    </div>
  )
};
