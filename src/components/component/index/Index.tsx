import style from './Index.module.scss'

const Index: React.FC = () => {
  return (
    <>
      <div className={style.wrap}>
        <img src="/img/test.svg" alt="" />
        <h1>Sample</h1>
      </div>
    </>
  )
}

export { Index }
