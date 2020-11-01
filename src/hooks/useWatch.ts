import { useEffect } from 'react'

const useWatch = (target: any): void => {
  useEffect(() => {
    console.log(target)
  }, [target])
}

export { useWatch }
