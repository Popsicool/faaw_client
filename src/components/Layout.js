import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import StickyNavigation from './StickyNavigation'

export const Layout = ({ children }) => {
  return (
    <>
    <div className=''>
        <Header/>
        <div>{ children }</div>
        <Footer/>
        {/* <StickyNavigation/> */}
      </div>
    </>
  )
}
