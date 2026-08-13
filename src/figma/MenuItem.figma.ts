// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=434-175
// source=src/components/MenuItem/MenuItem.tsx
// component=MenuItem
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const showLeadingIcon = instance.getBoolean('Show leading icon')
const state = instance.getEnum('State', {
  'Default': 'default',
  'Hover': 'hover',
  'Disabled': 'disabled',
  'Selected': 'selected',
  'Critical': 'critical',
})

const leadingIcon = showLeadingIcon ? instance.findInstance('Icon') : null
let iconCode: string | undefined
if (leadingIcon && leadingIcon.type === 'INSTANCE') {
  const iconText = leadingIcon.findText('arrow-right')
  if (iconText && 'textContent' in iconText) {
    iconCode = iconText.textContent
  }
}

export default {
  example: figma.code`
<MenuItem
  label="${label}"
  state="${state}"
  ${showLeadingIcon ? 'showLeadingIcon' : ''}
  ${iconCode ? figma.code`leadingIconCode="${iconCode}"` : ''}
/>
  `,
  imports: ['import { MenuItem } from "thelocker-storybook"'],
  id: 'menu-item',
  metadata: { nestable: true },
}
