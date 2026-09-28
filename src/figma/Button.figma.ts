// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=6-410
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Style', {
  'Primary': 'primary',
  'Secondary': 'secondary',
  'Neutral': 'neutral',
  'Destructive': 'destructive',
})
const appearance = instance.getEnum('Type', {
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
const leadingIcon = instance.getBoolean('Leading Icon')
const trailingIcon = instance.getBoolean('Trailing Icon')

export default {
  example: figma.code`
<Button
  label="${label}"
  variant="${variant}"
  appearance="${appearance}"
  size="${size}"
  ${state !== 'default' ? `state="${state}"` : ''}
  ${leadingIcon ? 'leadingIcon' : ''}
  ${trailingIcon ? 'trailingIcon' : ''}
/>
  `,
  imports: ['import { Button } from "thelocker-storybook"'],
  id: 'button',
  metadata: { nestable: true },
}
