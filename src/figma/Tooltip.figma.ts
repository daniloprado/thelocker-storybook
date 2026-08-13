// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=994-430
// source=src/components/Tooltip/Tooltip.tsx
// component=Tooltip
import figma from 'figma'
const instance = figma.selectedInstance

const text = instance.getString('Label')

export default {
  example: figma.code`<Tooltip text="${text}"><button>Hover me</button></Tooltip>`,
  imports: ['import { Tooltip } from "thelocker-storybook"'],
  id: 'tooltip',
  metadata: { nestable: true },
}
