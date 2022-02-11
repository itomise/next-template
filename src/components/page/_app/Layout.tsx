import { css } from '@emotion/react'

type Props = {
  children: React.ReactNode
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
