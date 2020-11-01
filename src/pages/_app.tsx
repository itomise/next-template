import * as React from 'react'
import App, { AppProps } from 'next/app'

import 'sanitize.css'
import '../styles/default/global.scss'

import { Layout } from '~/components/layout/Layout'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
