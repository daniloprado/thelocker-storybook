// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=48-635
// source=src/components/Switch/Switch.tsx
// component=Switch
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  'Unselected': 'unselected',
  'Selected': 'selected',
  'Disabled': 'disabled',
})

const checked = state === 'selected'
const disabled = state === 'disabled'

export default {
  example: figma.code`
<Switch
  ${checked ? 'defaultChecked' : ''}
  ${disabled ? 'disabled' : ''}
/>
  `,
  imports: ['import { Switch } from "thelocker-storybook"'],
  id: 'switch',
  metadata: { nestable: true },
}
