import { atom } from 'recoil'

export const countState = atom<number>({
  key: 'Count',
  default: 0,
})
