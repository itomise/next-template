import * as React from 'react'
import { AppProps } from 'next/app'

import '../styles/default/global.scss'

import { Layout } from '~/components/layout/Layout'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
