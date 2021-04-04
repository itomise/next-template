import { css } from '@emotion/react'

const HelloTitle: React.FC = () => (
  <div css={root}>
    <h1 className="h1">Next.js Template</h1>
    <div className="author">
      <a
        href="https://github.com/itomise"
        target="_blank"
        rel="noopener noreferrer"
      >
        @itomise
      </a>
    </div>
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
  .author {
    margin-top: 5px;
    color: blue;
    text-decoration: underline;
  }
`

export { HelloTitle }
