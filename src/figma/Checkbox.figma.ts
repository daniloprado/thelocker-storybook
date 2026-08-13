// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=48-1153
// source=src/components/Checkbox/Checkbox.tsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  'Unselected': 'unselected',
  'Selected': 'selected',
  'Indeterminate': 'indeterminate',
  'Disabled': 'disabled',
})

const checked = state === 'selected' || state === 'indeterminate'
const indeterminate = state === 'indeterminate'
const disabled = state === 'disabled'

export default {
  example: figma.code`
<Checkbox
  ${checked ? 'defaultChecked' : ''}
  ${indeterminate ? 'indeterminate' : ''}
  ${disabled ? 'disabled' : ''}
/>
  `,
  imports: ['import { Checkbox } from "thelocker-storybook"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
