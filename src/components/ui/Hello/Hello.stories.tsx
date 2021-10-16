import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Hello, Props } from 'components/ui/Hello/Hello'

export default {
  title: 'Hello',
  component: Hello,
} as Meta

export const Default: Story<Props> = (props) => (
  <Hello title="" count={0} {...props} />
)
Default.args = {
  title: 'test',
}
