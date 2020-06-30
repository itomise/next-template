import React from 'react'
import { NextComponentType } from 'next'

import style from './Header.module.scss'

const Header: NextComponentType = () => {
  return (
    <>
      <div className={style.l_header}>
        <p>Header</p>
      </div>
    </>
  )
}

export { Header }
