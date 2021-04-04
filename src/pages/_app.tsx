import * as React from 'react'
import { AppProps } from 'next/app'

import { Layout } from 'containers/templates/Layout'
import { RecoilRoot } from 'recoil'
import { Global } from '@emotion/react'
import { globalStyles } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Global styles={globalStyles} />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  )
}

export default MyApp
