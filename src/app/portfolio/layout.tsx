import React from 'react'
import Styles from './page.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <h1 className={Styles.mainTitle}>Our Works</h1>
        { children }
    </div>
  )
}

export default Layout