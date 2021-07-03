import { NextPage } from 'next'
import { Meta } from 'containers/organisms/Meta'
import { Hello } from 'containers/pages/index/Hello'

const Home: NextPage = () => {
  return (
    <>
      <Meta id="index" />

      <Hello title="Next.js Template" />
    </>
  )
}

export default Home
