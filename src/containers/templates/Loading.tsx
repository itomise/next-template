import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import style from '~/styles/containers/templates/Loading.module.scss'

const launchAnim = (cb: () => void): void => {
  // launch animation
  document.querySelector(`.${style.root}`).classList.add('none')
  cb()
}

const routeingStartAnim = (): void => {
  // routing start animation
}

const routingEndAnim = (): void => {
  // routing end animation
}

const Loading: React.FC = () => {
  const { appState, appDispatch } = useContext(AppContext)

  useEffect(() => {
    if (!appState.launch) {
      // on launch process
      launchAnim(() => {
        appDispatch({ type: 'LAUNCH' })
        appDispatch({ type: 'SET_LOADING', value: false })
      })
      return
    }
    if (appState.loading) {
      // Loading start
      routeingStartAnim()
    } else {
      // Loading end
      window.scrollTo(0, 0)
      routingEndAnim()
    }
  }, [appState.loading])

  return <div className={style.root}></div>
}

export { Loading }
