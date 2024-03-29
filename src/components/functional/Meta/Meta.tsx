import Head from 'next/head'
import { routeNameList } from './Meta.type'
import { META_DATA } from 'components/functional/Meta/Meta.constant'

type Props = {
  id: routeNameList
  dynamic?: {
    title: string
    path: string
  }
}

export const Meta = ({ id, dynamic }: Props) => {
  const data = META_DATA.pages.find((page) => page.id === id)

  let _title = data.title
  let _description = data.description
  let _path = data.path

  if (dynamic) {
    _title = dynamic.title + _title
    _description = dynamic.title
    _path = data.path + dynamic.path
  }

  return (
    <Head>
      <title>{_title}</title>
      <link rel="canonical" href={META_DATA.meta.domain + _path} />
      <meta name="description" content={_description} />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <meta property="og:site_name" content={_title} />
      <meta
        property="og:image"
        content={META_DATA.meta.domain + META_DATA.meta.ogpImagePath}
      />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:description" content={_description} />
      <meta
        name="twitter:image"
        content={META_DATA.meta.domain + META_DATA.meta.ogpImagePath}
      />
    </Head>
  )
}
