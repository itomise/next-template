import style from '~/styles/components/molecules/index/HelloTitle.module.scss'

const HelloTitle: React.FC = () => (
  <>
    <h1 className={style.h1}>Next.js Template</h1>
    <div className={style.img}>
      <img src="/img/test.svg" alt="" />
    </div>
  </>
)

export { HelloTitle }
