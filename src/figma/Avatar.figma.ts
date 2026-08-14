// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=687-631
// source=src/components/Avatar/Avatar.tsx
// component=Avatar
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', {
  'Small': 'small',
  'Medium': 'medium',
  'Large': 'large',
})
const type = instance.getEnum('Type', {
  'Image': 'image',
  'Placeholder': 'placeholder',
  'Initials': 'initials',
})
const initials = instance.getString('Initials')

export default {
  example: figma.code`
<Avatar
  size="${size}"
  type="${type}"
  ${type === 'initials' ? figma.code`fallback="${initials}"` : ''}
  ${type === 'image' ? 'src="/avatar.jpg"' : ''}
/>
  `,
  imports: ['import { Avatar } from "thelocker-storybook"'],
  id: 'avatar',
  metadata: { nestable: true },
}
