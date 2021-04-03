import config from './config'

const calc = {
  vwpc: (size: number): string => {
    const rate = 100 / config.pc.campusWidth
    return (rate * size).toString() + 'vw'
  },
  vwsp: (size: number): string => {
    const rate = 100 / config.sp.campusWidth
    return (rate * size).toString() + 'vw'
  },
}

export default calc
