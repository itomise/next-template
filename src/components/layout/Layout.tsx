import { NextComponentType, NextPageContext } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppModule, Terminal, DeviceType } from '~/modules/store/appModule'

type Props = {
  children: React.ReactNode
}

const Layout: NextComponentType<NextPageContext, {}, Props> = ({
  children
}) => {
  const dispatch = useDispatch()

  // user agent
  useEffect(() => {
    let isLegacy = false
    const ua = window.navigator.userAgent.toLowerCase()
    if (ua.indexOf('msie') != -1) {
      isLegacy = true
    }
    let deviceType: DeviceType = 'pc'
    if (
      ua.indexOf('iPhone') > 0 ||
      ua.indexOf('iPod') > 0 ||
      (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)
    ) {
      deviceType = 'sp'
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
      deviceType = 'tab'
    } else {
      deviceType = 'pc'
    }
    // iPad
    if (
      /iPad|Macintosh/i.test(navigator.userAgent) &&
      'ontouchend' in document
    ) {
      deviceType = 'tab'
    }

    const terminal: Terminal = {
      isLegacy,
      deviceType
    }
    dispatch(AppModule.actions.updateTerminal(terminal))
  })

  return <>{children}</>
}

export { Layout }
