import { Global } from '@emotion/react'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { globalStyles } from '../src/styles/global'

addDecorator((storyFn) => (
  <>
    <Global styles={globalStyles} />
    {storyFn()}
  </>
))

export const parameters = {
  options: {
    storySort: {
      order: ['Welcome', 'Button'],
    },
  },
}
