// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=1537-226
// source=src/components/Icon/FancyIcon.tsx
// component=FancyIcon
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', {
  'Small': 'small',
  'Meidum': 'medium',
  'Medium': 'medium',
  'Large': 'large',
})
const color = instance.getEnum('Color', {
  'Blue': 'blue',
  'Neutral': 'neutral',
})

const icon = instance.findInstance('Icon')
let faCode = 'user'
if (icon && icon.type === 'INSTANCE') {
  const iconText = icon.findText('arrow-right')
  if (iconText && 'textContent' in iconText && iconText.textContent) {
    faCode = iconText.textContent
  }
}

export default {
  example: figma.code`<FancyIcon faCode="${faCode}" size="${size}" color="${color}" />`,
  imports: ['import { FancyIcon } from "thelocker-storybook"'],
  id: 'fancy-icon',
  metadata: { nestable: true },
}
