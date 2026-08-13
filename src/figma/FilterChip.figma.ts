// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=656-804
// source=src/components/FilterChip/FilterChip.tsx
// component=FilterChip
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.findText('Breakfast')
const labelText = label && 'textContent' in label ? label.textContent : 'Label'

const variant = instance.getEnum('Property 1', {
  'Default': 'default',
  'Hover': 'default',
  'Selelcted': 'selected',
  'Disabled': 'disabled',
  'Filter chip': 'filter',
})

const selected = variant === 'selected'
const disabled = variant === 'disabled'
const showClose = variant === 'filter'

export default {
  example: figma.code`
<FilterChip
  label="${labelText}"
  ${selected ? 'selected' : ''}
  ${disabled ? 'disabled' : ''}
  ${showClose ? 'showClose' : ''}
/>
  `,
  imports: ['import { FilterChip } from "thelocker-storybook"'],
  id: 'filter-chip',
  metadata: { nestable: true },
}
