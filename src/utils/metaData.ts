import { metaDataType } from 'interfaces/meta'

const metaData: metaDataType = {
  meta: {
    domain: process.env.BASE_DOMAIN ?? 'http://example.co.jp',
    ogpImagePath: '/ogp.png',
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
