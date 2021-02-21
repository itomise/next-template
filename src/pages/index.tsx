import { NextPage } from 'next'
import { Meta } from '~/containers/organisms/Meta'
import { Hello } from '~/containers/pages/index/Hello'

const Home: NextPage = () => {
  return (
    <>
      <Meta id="index" />

      <Hello />
    </>
  )
}

export default Home
