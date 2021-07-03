import { Global } from '@emotion/react'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { globalStyles } from '../src/styles/global'
import { RecoilRoot } from 'recoil'

addDecorator((storyFn) => (
  <RecoilRoot>
    <Global styles={globalStyles} />
    {storyFn()}
  </RecoilRoot>
))

export const parameters = {
  options: {
    storySort: {
      order: ['Welcome', 'Button'],
    },
  },
}
