import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Hello, Props } from 'containers/pages/index/Hello'

export default {
  title: 'Hello',
  component: Hello,
} as Meta

export const Default: Story<Props> = (props) => (
  <Hello
    title=""
    {...props}
  />
)
Default.args = {
  title: 'test'
}
