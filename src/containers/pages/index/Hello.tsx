import { css } from '@emotion/react'
import { useRecoilState } from 'recoil'
import { HelloTitle } from '~/components/molecules/index/HelloTitle'
import { countState } from '~/store/app'

const Hello: React.FC = () => {
  const [count, setCount] = useRecoilState(countState)
  return (
    <>
      <div css={wrap}>
        <HelloTitle />
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

const wrap = css`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  flex-direction: column;
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
