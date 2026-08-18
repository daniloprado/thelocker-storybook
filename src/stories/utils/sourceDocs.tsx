import { Controls, Description, Primary, Source, Stories, Subtitle, Title } from '@storybook/blocks';

type SourceDocsParameters = {
  docs: {
    description: {
      component: string;
    };
    source: {
      code: string;
      language: 'tsx';
      type: 'code';
    };
    page: () => JSX.Element;
  };
};

const WORKSPACE_ROOT = '/Users/danilo.prado/Documents/thelocker-storybook';

function inferComponentName(relativePath: string): string {
  const filename = relativePath.split('/').at(-1) ?? 'Component.tsx';
  return filename.replace(/\.tsx$/i, '') || 'Component';
}

function defaultSnippet(relativePath: string): string {
  const componentName = inferComponentName(relativePath);

  switch (componentName) {
    case 'Button':
      return `import { Button } from 'thelocker-storybook';

<Button
  label="Save"
  variant="filled"
  size="medium"
  state="default"
  action="regular"
/>`;
    case 'Chip':
      return `import { Chip } from 'thelocker-storybook';

<Chip label="Client" color="green" size="small" />
<Chip label="Selected" color="whiteStrong" size="medium" />`;
    case 'DropArea':
      return `import { DropArea } from 'thelocker-storybook';

<DropArea
  label="Drag and drop your items here"
  description="or drag questions from the left"
  state="default"
/>`;
    case 'Icon':
      return `import { Icon } from 'thelocker-storybook';

<Icon fa-code="user" fa-style="regular" size="small" />`;
    case 'Input':
      return `import { Input } from 'thelocker-storybook';

<Input placeholder="Type here" size="middle" allowClear />`;
    case 'Table':
      return `import { Table } from 'thelocker-storybook';

const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'age', title: 'Age', dataIndex: 'age', align: 'right' as const }
];

const dataSource = [
  { key: '1', name: 'John Brown', age: 32 }
];

<Table columns={columns} dataSource={dataSource} />`;
    case 'MenuItem':
      return `import { MenuItem } from 'thelocker-storybook';

<MenuItem
  label="Menu item"
  state="default"
  showLeadingIcon
  leadingIconCode="arrow-right"
/>`;
    case 'MenuGroup':
      return `import { MenuGroup } from 'thelocker-storybook';

<MenuGroup>
  <MenuGroup.Item label="Edit" />
  <MenuGroup.Item label="Delete" />
  <MenuGroup.Heading heading="Style" />
  <MenuGroup.Item label="Line chart" state="selected" />
</MenuGroup>`;
    case 'Sidenav':
      return `import { Sidenav } from 'thelocker-storybook';

<Sidenav layout="full">
  <Sidenav.Main title="Main">
    <Sidenav.NavItem label="Overview" faCode="house" state="active" />
  </Sidenav.Main>
</Sidenav>`;
    case 'Avatar':
      return `import { Avatar } from 'thelocker-storybook';

<Avatar src="/avatar.jpg" size="large" type="image" />`;
    case 'AvatarGroup':
      return `import { AvatarGroup } from 'thelocker-storybook';

<AvatarGroup
  title="Jane Cooper"
  subtitle="Product Designer"
  src="/avatar.jpg"
/>`;
    case 'Dialog':
      return `import { Dialog } from 'thelocker-storybook';
import { Button } from 'thelocker-storybook';

<Dialog
  title="Heading"
  variant="scroll"
  onClose={() => {}}
  footer={
    <>
      <Button label="Cancel" variant="outline" size="large" />
      <Button label="Confirm" variant="filled" size="large" />
    </>
  }
>
  <p>Dialog content goes here.</p>
</Dialog>`;
    case 'Card':
      return `import { Card } from 'thelocker-storybook';

<Card
  title="Heading"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  tag="Label"
  size="medium"
/>`;
    case 'Tabs':
      return `import { Tabs } from 'thelocker-storybook';

{/* Standard style */}
<Tabs size="default" orientation="horizontal">
  <Tabs.Item label="Tab 1" active />
  <Tabs.Item label="Tab 2" />
  <Tabs.Item label="Tab 3" />
</Tabs>

{/* Pill style — active uses Chip whiteStrong, inactive uses Chip neutral */}
<Tabs tabStyle="pill">
  <Tabs.Item label="All" active />
  <Tabs.Item label="Active" />
  <Tabs.Item label="Paused" />
</Tabs>`;
    case 'Checkbox':
      return `import { Checkbox } from 'thelocker-storybook';

<Checkbox label="Accept terms" />`;
    case 'RadioButton':
      return `import { RadioButton } from 'thelocker-storybook';

<RadioButton label="Option A" name="group" />`;
    case 'Switch':
      return `import { Switch } from 'thelocker-storybook';

<Switch label="Enable notifications" />`;
    case 'List':
      return `import { List } from 'thelocker-storybook';

<List>
  <List.Item label="Item 1" secondaryText="Right" />
  <List.Item label="Item 2" secondaryText="Right" />
</List>`;
    case 'Tooltip':
      return `import { Tooltip } from 'thelocker-storybook';

<Tooltip text="Tooltip content" position="top">
  <button>Hover me</button>
</Tooltip>`;
    case 'Widget':
      return `import { Widget } from 'thelocker-storybook';

<Widget title="Revenue">
  <p>$1,000.00</p>
</Widget>`;
    case 'FilterChip':
      return `import { FilterChip } from 'thelocker-storybook';

<FilterChip label="Breakfast" selected />`;
    default:
      return `import { ${componentName} } from 'thelocker-storybook';

<${componentName} />`;
  }
}

export function sourceDocs(
  relativePath: string,
  sourceCode: string,
  snippet?: string
): SourceDocsParameters {
  const absolutePath = `${WORKSPACE_ROOT}/${relativePath}`;
  const sourceUrl = `vscode://file${absolutePath}`;
  const snippetCode = snippet ?? defaultSnippet(relativePath);

  return {
    docs: {
      description: {
        component: `Source: [\`${relativePath}\`](${sourceUrl})`
      },
      source: {
        code: snippetCode,
        language: 'tsx',
        type: 'code'
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />

          <h2>Snippet</h2>
          <Source language="tsx" code={snippetCode} />

          <h2>Source</h2>
          <p>
            Open file: <a href={sourceUrl}>{relativePath}</a>
          </p>
          <Source language="tsx" code={sourceCode} />

          <Stories includePrimary={false} />
        </>
      )
    }
  };
}
