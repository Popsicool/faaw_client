import React from 'react'
import pic from "../assets/pic1.png"
export const About = () => {
  return (
    <div className='aboutOutCont'>
        <div className='aboutOut'>
            <div className='ds1'>
                <h2 className='abts'>About Us</h2>
            </div>
            <div className='row'>
                <div className='col-md-8 aboutText'>
                    <p>
                        House of FAAW is a fashion brand born of the need of mature stylish and functional clothing for men.
                    </p>
                    <p>
                        We offer products that are just the right fit for you. our pieces are made with the choosiest of materials and the nearest tailoring
                    </p>
                    <p><button className='readMore'>Read More</button></p>

                </div>
                <div className='col-md-4'>
                    <img className='aboutPics' src={pic} alt="caf"/>
                </div>
            </div>
        </div>
    </div>
  )
}
