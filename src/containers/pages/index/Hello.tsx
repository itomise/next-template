import { css } from '@emotion/react'
import { useRecoilState } from 'recoil'
import { countState } from 'store/app'

export type Props = {
  title: string
}

const Hello: React.FC<Props> = (props) => {
  const [count, setCount] = useRecoilState(countState)
  return (
    <>
      <div css={root}>
        <div css={title}>
          <h1 className="h1">{props.title}</h1>
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
          <button onClick={(): void => setCount((num) => num + 1)} css={button}>
            +
          </button>
          <button onClick={(): void => setCount((num) => num - 1)} css={button}>
            -
          </button>
        </div>
      </div>
    </>
  )
}

const root = css`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  flex-direction: column;
`
const title = css`
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
const button = css`
  margin: 10px 10px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
`

export { Hello }
