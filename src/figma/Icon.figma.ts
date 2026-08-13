// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=1-625
// source=src/components/Icon/Icon.tsx
// component=Icon
import figma from 'figma'
const instance = figma.selectedInstance

const faCode = instance.getString('Icon code')
const size = instance.getEnum('Size', {
  'Xxsmall': 'xxsmall',
  'Xsmall': 'xsmall',
  'Small': 'small',
  'Medium': 'medium',
  'Large': 'large',
  'Xlarge': 'xlarge',
})

export default {
  example: figma.code`<Icon faCode="${faCode}" size="${size}" />`,
  imports: ['import { Icon } from "thelocker-storybook"'],
  id: 'icon',
  metadata: { nestable: true },
}
