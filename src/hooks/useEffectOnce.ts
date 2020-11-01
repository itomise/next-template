import { useEffect } from 'react'

const useEffectOnce = (fn: () => void): void => {
  useEffect(() => {
    fn()
  }, [])
}

export { useEffectOnce }
