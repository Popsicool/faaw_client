import React from 'react'
import "../styles/hero.css"
export const Hero = () => {
  return (
    <div className='heroParent'>
        <div className='heroChild'>
          <div className='heroInner'>
            <h3 className='conf'> Confidence  .  Comfort  .  Class</h3>
            <p className='saunt'>Saunter In For a Great Experience</p>
            <button className='shopNow'>Shop Now</button>
          </div>
        </div>
    </div>
  )
}
