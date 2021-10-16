import { css } from '@emotion/react'

export type Props = {
  title: string
  count: number
  increment: () => void
  decrement: () => void
}

const Hello = ({ title, count, increment, decrement }: Props) => {
  return (
    <>
      <div css={style.root}>
        <div css={style.title}>
          <h1 className="h1">{title}</h1>
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
        <span>{count}</span>
        <div>
          <button onClick={increment} css={style.button}>
            +
          </button>
          <button onClick={decrement} css={style.button}>
            -
          </button>
        </div>
      </div>
    </>
  )
}

const style = {
  root: css`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    flex-direction: column;
  `,
  title: css`
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
  `,
  button: css`
    margin: 10px 10px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
  `,
}

export { Hello }
