import { css } from '@emotion/react'

type Props = {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div css={root}>{children}</div>
    </>
  )
}

const root = css`
  position: relative;
`

export { Layout }
