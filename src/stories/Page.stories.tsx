import React from 'react'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'

export default { title: 'Welcome' }

export const toStorybook = (): JSX.Element => (
  <Welcome showApp={linkTo('Button')} />
)

toStorybook.args = {}
