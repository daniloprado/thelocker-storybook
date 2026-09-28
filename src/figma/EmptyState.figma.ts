// url=https://www.figma.com/design/JpqUOwWPAM6x80LNylauHx/The-Locker-2.0--Web-?node-id=1537-506
// source=src/components/EmptyState/EmptyState.tsx
// component=EmptyState
import figma from 'figma'
const instance = figma.selectedInstance

const heading = instance.getString('Heading')
const description = instance.getString('Body')
const showIcon = instance.getBoolean('Show icon')
const showHeading = instance.getBoolean('Show heading')
const showDescription = instance.getBoolean('Show description')
const showButton = instance.getBoolean('Shot button')

export default {
  example: figma.code`
<EmptyState
  heading="${heading}"
  description="${description}"
  ${showIcon === false ? 'showIcon={false}' : ''}
  ${showHeading === false ? 'showHeading={false}' : ''}
  ${showDescription === false ? 'showDescription={false}' : ''}
  ${showButton === false ? 'showButton={false}' : ''}
/>
  `,
  imports: ['import { EmptyState } from "thelocker-storybook"'],
  id: 'empty-state',
  metadata: { nestable: true },
}
