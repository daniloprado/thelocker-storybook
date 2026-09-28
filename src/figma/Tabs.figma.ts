// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=77-69
// source=src/components/Tabs/Tabs.tsx
// component=Tabs
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', {
  'Small': 'small',
  'Default': 'default',
  'Large': 'large',
})
const tabStyle = instance.getEnum('Style', {
  'Standard': 'standard',
  'Pill': 'pill',
})

export default {
  example: figma.code`
<Tabs size="${size}" tabStyle="${tabStyle}">
  <Tabs.Item label="Tab 1" active />
  <Tabs.Item label="Tab 2" />
  <Tabs.Item label="Tab 3" />
</Tabs>
  `,
  imports: ['import { Tabs } from "thelocker-storybook"'],
  id: 'tabs',
  metadata: { nestable: true },
}
