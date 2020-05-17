import * as React from 'react'
import App, { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { setupStore } from '~/store'

import Header from '../components/layout/Header'

const store = setupStore()

// global style - - -
import 'sanitize.css'
import '../styles/common.scss'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props

    return (
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp
