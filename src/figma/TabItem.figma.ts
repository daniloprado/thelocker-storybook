// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=34-93
// source=src/components/Tabs/Tabs.tsx
// component=Tabs.Item
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  'Active': 'active',
  'Default': 'default',
})

export default {
  example: figma.code`<Tabs.Item label="Tab" ${state === 'active' ? 'active' : ''} />`,
  imports: ['import { Tabs } from "thelocker-storybook"'],
  id: 'tab-item',
  metadata: { nestable: true },
}
