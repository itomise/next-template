import { css } from '@emotion/react'

const HelloTitle: React.FC = () => (
  <div css={root}>
    <h1 className="h1">Next.js Template</h1>
    <div className="img">
      <img src="/img/test.svg" alt="" />
    </div>
  </div>
)

const root = css`
  text-align: center;

  .img {
    padding: 20px 0;
    img {
      width: 200px;
    }
  }
  .h1 {
    letter-spacing: 1px;
    font-size: 30px;
    font-weight: bold;
  }
`

export { HelloTitle }
