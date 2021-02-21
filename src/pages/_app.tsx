import * as React from 'react'
import { AppProps } from 'next/app'

import '../styles/settings/global.scss'

import { Provider } from '~/containers/templates/Provider'
import { Loading } from '~/containers/templates/Loading'
import { Layout } from '~/containers/templates/Layout'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider>
      <Loading />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
