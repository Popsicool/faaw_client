import React from 'react'
import "../styles/designs.css"
import { Categories } from './Categories'
import { Collections } from './Collections'

export const Designs = () => {
  return (
    <div className='designs'>
        <div className='row designsTop gx-1 reveal'>
            <div className='ds1'>
                <h2 className='dT1'>Available Designs</h2>
                <p className='dT11'>We want you to constantly present yourself elegantly</p>
            </div>
            <div className='slideCont'>
                <Collections/>
            </div>
        </div>
        <div className='row designsMiddle gx-4 reveal'>
            <div className='ds1'>
                <h2 className='dT1'>Shop by Categories</h2>
                <p className='dT11'>We are confident that you will find something you like exploring by our categories</p>
            </div>
            <Categories/>

        </div>
    </div>
  )
}
