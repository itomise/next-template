import { atom, useRecoilState } from 'recoil'

const countState = atom<number>({
  key: 'Count',
  default: 0,
})

export const useGlobalCount = () => {
  const [count, setCount] = useRecoilState(countState)

  const increment = () => {
    setCount((cur) => cur + 1)
  }

  const decrement = () => {
    setCount((cur) => cur - 1)
  }

  return { count, increment, decrement }
}
