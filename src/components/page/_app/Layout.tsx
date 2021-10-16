import { css } from '@emotion/react'
import { ReactNode } from '@reach/router/node_modules/@types/react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div css={style.page}>{children}</div>
    </>
  )
}

const style = {
  page: css`
    position: relative;
  `,
}
