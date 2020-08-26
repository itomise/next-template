import * as React from 'react'
import { NextPage } from 'next'

import Head from 'next/head'
import { Index } from '~/components/component/Index'

const Home: NextPage = () => (
  <>
    <Head>
      <title>next template top</title>
    </Head>

    <Index />
  </>
)

export default Home
