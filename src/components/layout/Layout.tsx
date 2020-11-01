import { AppContext, useAppReducer } from '~/store/appContext'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const [appState, appDispatch] = useAppReducer()

  return (
    <>
      <AppContext.Provider value={{ appState, appDispatch }}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export { Layout }
