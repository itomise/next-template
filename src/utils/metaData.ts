import { metaDataType } from '~/interfaces/meta'

const metaData: metaDataType = {
  meta: {
    domain: 'https://example.jp',
    ogpImagePath: '/assets/img/common/ogp.png',
    type: 'website',
    websiteName: 'Next.js Template',
  },
  pages: [
    {
      id: 'index',
      title: 'Top',
      description: 'Next.js Template',
      path: '/',
    },
  ],
}

export { metaData }
