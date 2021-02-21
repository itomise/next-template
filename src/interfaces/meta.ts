export type routeNameList = 'index'

export type pageDataType = {
  id: routeNameList
  title: string
  description: string
  path: string
}

export type metaDataType = {
  meta: {
    domain: string
    ogpImagePath: string
    type: 'website' | 'article'
    websiteName: string
  }
  pages: pageDataType[]
}
