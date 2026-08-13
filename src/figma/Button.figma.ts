// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=6-410
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Type', {
  'Filled': 'filled',
  'Outline': 'outline',
  'Text': 'text',
  'Ghost': 'ghost',
})
const size = instance.getEnum('Size', {
  'Large': 'large',
  'Medium': 'medium',
  'Small': 'small',
})
const state = instance.getEnum('State', {
  'Default': 'default',
  'Hover': 'hover',
  'Active': 'active',
  'Focus': 'focus',
  'Disabled': 'disabled',
})
const action = instance.getEnum('Action', {
  'Regular': 'regular',
  'Destructive': 'destructive',
})

export default {
  example: figma.code`
<Button
  label="${label}"
  variant="${variant}"
  size="${size}"
  state="${state}"
  action="${action}"
/>
  `,
  imports: ['import { Button } from "thelocker-storybook"'],
  id: 'button',
  metadata: { nestable: true },
}
