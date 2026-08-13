// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=548-447
// source=src/components/Widget/Widget.tsx
// component=Widget
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Heading')
const showAmount = instance.getBoolean('Show amount')
const amount = instance.getString('Amount')

const content = instance.getSlot('Slot')

export default {
  example: figma.code`
<Widget title="${title}">
  ${showAmount ? figma.code`<p style={{ fontSize: 24, fontWeight: 700 }}>${amount}</p>` : ''}
  ${content}
</Widget>
  `,
  imports: ['import { Widget } from "thelocker-storybook"'],
  id: 'widget',
  metadata: { nestable: false },
}
