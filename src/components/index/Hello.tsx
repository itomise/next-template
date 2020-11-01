import { useContext } from 'react'
import { AppContext } from '~/store/appContext'
import style from '~/styles/components/index/Hello.module.scss'

const Hello: React.FC = () => {
  const { appState, appDispatch } = useContext(AppContext)
  return (
    <>
      <div className={style.wrap}>
        <h1 className={style.h1}>Next.js Template</h1>
        <div className={style.img}>
          <img src="/img/test.svg" alt="" />
        </div>
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
