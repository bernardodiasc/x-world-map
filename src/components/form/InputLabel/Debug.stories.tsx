import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import InputLabel from './InputLabel'

import { storiesConfig } from '.'

export default {
  ...storiesConfig,
  title: `${storiesConfig.title}/Debug`,
} as ComponentMeta<typeof InputLabel>

const Template: ComponentStory<typeof InputLabel> = (args) => <InputLabel {...args} />

export const NoProps_InputLabel = Template.bind({})
NoProps_InputLabel.storyName = 'No props'
NoProps_InputLabel.args = {}
NoProps_InputLabel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const component = canvas.queryByTestId('InputLabel')
  await expect(component).not.toBeInTheDocument()
}
