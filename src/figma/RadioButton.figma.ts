// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=48-1149
// source=src/components/RadioButton/RadioButton.tsx
// component=RadioButton
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
<RadioButton
  ${checked ? 'defaultChecked' : ''}
  ${disabled ? 'disabled' : ''}
/>
  `,
  imports: ['import { RadioButton } from "thelocker-storybook"'],
  id: 'radio-button',
  metadata: { nestable: true },
}
