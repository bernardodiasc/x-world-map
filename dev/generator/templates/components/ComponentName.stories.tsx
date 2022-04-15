import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import <%= componentName %> from './<%= componentName %>'

export default {
  title: '<% if (parentComponent) { %><%= parentComponent.replace(/\w/, c => c.toUpperCase()) %>/<%= componentName %><% } else { %><%= componentName %><% } %>',
  component: <%= componentName %>,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ]
} as ComponentMeta<typeof <%= componentName %>>

const Template: ComponentStory<typeof <%= componentName %>> = (args) => <<%= componentName %> {...args} />

export const <%= componentName %>Story = Template.bind({})
<%= componentName %>Story.storyName = '<%= componentName %>'
<%= componentName %>Story.args = { onClick: action('button-click') }
<%= componentName %>Story.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com', { delay: 100 })
  await userEvent.click(canvas.getByTestId('button'))
  await expect(args.onClick).toHaveBeenCalled()
}
