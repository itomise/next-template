import { NextPage } from 'next'
import Head from 'next/head'
import { Hello } from '~/components/index/Hello'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Top</title>
      </Head>

      <Hello />
    </>
  )
}

export default Home
