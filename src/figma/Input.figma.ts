// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=1049-2838
// source=src/components/Input/Input.tsx
// component=Input
import figma from 'figma'
const instance = figma.selectedInstance

const placeholder = instance.getString('Placeholder')
const size = instance.getEnum('Size', {
  'Small': 'small',
  'Middle': 'middle',
  'Large': 'large',
})
const status = instance.getEnum('Status', {
  'Default': 'default',
  'Error': 'error',
  'Warning': 'warning',
})
const disabled = instance.getEnum('State', {
  'Default': false,
  'Disabled': true,
  'Focus': false,
  'Haver': false,
})

export default {
  example: figma.code`
<Input
  placeholder="${placeholder}"
  size="${size}"
  status="${status}"
  ${disabled ? 'disabled' : ''}
/>
  `,
  imports: ['import { Input } from "thelocker-storybook"'],
  id: 'input',
  metadata: { nestable: true },
}
