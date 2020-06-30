import * as React from 'react'
import App, { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { setupStore } from '~/store'

const store = setupStore()

import 'sanitize.css'
import '../styles/common.scss'

import { Layout } from '~/components/layout/Layout'
import { Header } from '~/components/layout/Header/Header'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props

    return (
      <Provider store={store}>
        <Layout>
          <Header />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default MyApp
