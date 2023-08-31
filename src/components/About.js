import React from 'react'
import pic from "../assets/pic1.png"
export const About = () => {
  return (
    <div className='aboutOutCont'>
        <div className='aboutOut reveal'>
            <div className='ds1'>
                <h2 className='abts'>About Brand</h2>
            </div>
            <div className='about-col'>
                <div className='aboutText'>
                    <p>
                        House of FAAW is a fashion brand born of the need of mature stylish and functional clothing for men.
                    </p>
                    <p>
                        We offer products that are just the right fit for you. our pieces are made with the choosiest of materials and the nearest tailoring
                    </p>
                    <p><button className='readMore'>Read More</button></p>
                </div>
                <div className='aboutPics'>
                    <img className='' src={pic} alt="caf"/>
                </div>
            </div>
        </div>
    </div>
  )
}
