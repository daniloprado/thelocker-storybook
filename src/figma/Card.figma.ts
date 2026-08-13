// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=1406-2630
// source=src/components/Card/Card.tsx
// component=Card
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Property 1', {
  'Small': 'small',
  'Medium': 'medium',
  'Large': 'large',
  'Stretch': 'stretch',
})

const title = instance.findText('Title')
const description = instance.findText('Description')
const titleText = title && 'textContent' in title ? title.textContent : 'Heading'
const descText = description && 'textContent' in description ? description.textContent : ''

export default {
  example: figma.code`
<Card
  size="${size}"
  title="${titleText}"
  description="${descText}"
/>
  `,
  imports: ['import { Card } from "thelocker-storybook"'],
  id: 'card',
  metadata: { nestable: true },
}
