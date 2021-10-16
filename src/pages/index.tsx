import { NextPage } from 'next'
import { Meta } from 'components/functional/Meta/Meta'
import { Index } from 'components/page/index'

const Home: NextPage = () => {
  return (
    <>
      <Meta id="index" />

      <Index />
    </>
  )
}

export default Home
