import { useContext } from 'react'
import { HelloTitle } from '~/components/molecules/index/HelloTitle'
import { AppContext } from '~/store/appContext'
import style from '~/styles/containers/pages/index/Hello.module.scss'

const Hello: React.FC = () => {
  const { appState, appDispatch } = useContext(AppContext)
  return (
    <>
      <div className={style.wrap}>
        <HelloTitle />
        <span>{appState.count}</span>
        <div>
          <button
            onClick={(): void => appDispatch({ type: 'INCREMENT' })}
            className={style.button}
          >
            +
          </button>
          <button
            onClick={(): void => appDispatch({ type: 'DECREMENT' })}
            className={style.button}
          >
            -
          </button>
        </div>
      </div>
    </>
  )
}

export { Hello }
