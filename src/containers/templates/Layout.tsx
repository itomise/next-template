import style from '~/styles/containers/templates/Layout.module.scss'

type Props = {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={style.root}>{children}</div>
    </>
  )
}

export { Layout }
