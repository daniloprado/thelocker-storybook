// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=87-124
// source=src/components/Chip/Chip.tsx
// component=Chip
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const color = instance.getEnum('Color', {
  'Yellow': 'yellow',
  'Blue': 'blue',
  'Neutral': 'neutral',
  'Green': 'green',
  'Red': 'red',
  'White': 'white',
  'Pink': 'pink',
  'Teal': 'teal',
  'Orange': 'orange',
  'White Strong': 'whiteStrong',
})
const size = instance.getEnum('Size', {
  'Small': 'small',
  'Medium': 'medium',
  'Large': 'large',
})
const showHeadingSlot = instance.getBoolean('Show heading slot')
const showTrailingSlot = instance.getBoolean('Show trailing slot')

export default {
  example: figma.code`<Chip label="${label}" color="${color}" size="${size}"${showHeadingSlot ? ' showLeadingIcon' : ''}${showTrailingSlot ? ' showTrailingIcon' : ''} />`,
  imports: ['import { Chip } from "thelocker-storybook"'],
  id: 'chip',
  metadata: { nestable: true },
}
