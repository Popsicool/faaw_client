import React from 'react'
import "../styles/designs.css"
import coldata from "../data/CollData"
import { Link } from 'react-router-dom'
import { SliderTest } from './SliderTest'

export const Designs = () => {
  return (
    <div className='designs'>
        <div className='row designsTop gx-1'>
            <div className='ds1'>
                <h2 className='dT1'>Available Designs</h2>
                <p className='dT11'>We want you to constantly present yourself elegantly</p>
            </div>
            <div className='slideCont'>
                <SliderTest/>
            </div>
        </div>
        <div className='row designsMiddle gx-5'>
            <div className='ds1'>
                <h2 className='dT1'>Shop by categories</h2>
                <p className='dT11'>We want you to constantly present yourself elegantly</p>
            </div>
            {coldata.map((each, index) => (
                <div className='col-md-6' key={index}>
                    <div className='cZ'>
                        <div className='sImgCont'>
                            <img src={each.img} alt={each.name} className='sImage'/>
                        </div>
                        <div className='btS btS2'>
                            <h4>{each.name}</h4>
                            <Link to={`/collections/${each.name}`}><button className='dBtn'>Select Options</button></Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>


    </div>
  )
}
