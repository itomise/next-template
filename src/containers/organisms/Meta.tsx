import Head from 'next/head'
import { routeNameList } from 'interfaces/meta'
import { metaData } from 'utils/metaData'

type Props = {
  id: routeNameList
  dynamic?: {
    title: string
    path: string
  }
}

const Meta: React.FC<Props> = ({ id, dynamic }) => {
  const data = metaData.pages.find((page) => page.id === id)

  let _title = data.title
  let _description = data.description
  let _path = data.path

  if (dynamic) {
    _title = dynamic.title + _title
    _description = dynamic.title
    _path = '/' + dynamic.path
  }

  return (
    <Head>
      <title>{_title}</title>
      <link rel="canonical" href={metaData.meta.domain + _path} />
      <meta name="description" content={_description} />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <meta property="og:site_name" content={_title} />
      <meta
        property="og:image"
        content={metaData.meta.domain + metaData.meta.ogpImagePath}
      />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:description" content={_description} />
      <meta
        name="twitter:image"
        content={metaData.meta.domain + metaData.meta.ogpImagePath}
      />
    </Head>
  )
}

export { Meta }
