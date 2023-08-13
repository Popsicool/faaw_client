import React from 'react'
import pic from "../assets/pic1.png"
export const About = () => {
  return (
    <div className='aboutOut'>
        <div className='ds1'>
            <h2 className='abts'>About Us</h2>
        </div>
        <div className='about'>
            <div className='aboutText'>
                <p>
                    House of FAAW is a fashion brand born of the need of mature stylish and functional clothing for men.
                </p>
                <p>
                    We offer products that are just the right fit for you. our pieces are made with the choosiest of materials and the nearest tailoring <span className='readMore'>Read More....</span>
                </p>

            </div>
            <div className='aboutPicCont'>
                <img className='aboutPics' src={pic} alt="caf"/>
            </div>
        </div>
    </div>
  )
}
