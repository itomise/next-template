import { useAppReducer, AppContext } from '~/store/appContext'

type Props = {
  children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
  const [appState, appDispatch] = useAppReducer()

  return (
    <>
      <AppContext.Provider value={{ appState, appDispatch }}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export { Provider }
