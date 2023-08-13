import React from 'react'
import pic from "../assets/pic1.png"
import "../styles/testimonies.css"
export const Testimonies = () => {
  return (
    <div className='testimonies'>
        <div className='ds1'>
                <h2 className='dT1 testTxxt'>Testimonials</h2>
            </div>
        <div className='allTest'>
            <div className="revieW">
                <div className='testTop'>
                    <div className='testImgC'>
                        <img className='testImg' src={pic} alt="review"/>
                    </div>
                    <h4>
                        Idris Nola
                    </h4>
                </div>
                <p>I just got some pictures from the wedding I wore the agbada too. I love it. Thank you.</p>
            </div>
            <div className="revieW reviewMiddle">
                <div className='testTop'>
                    <div className='testImgC testImgCenter'>
                        <img className='testImg testImgCenter' src={pic} alt="review"/>
                    </div>
                    <h4>
                        Mark Olumide
                    </h4>
                </div>
                <p>Hey, Brother. just me using this opportunity to tell you that you’ve got gifted hands. And you can only get better man. you’re good at what you do. That’s all you. LIVE in the UK. I am getting a lot of compliments for it.</p>
            </div>
            <div className="revieW">
                <div className='testTop'>
                    <h4>
                        Ope Oritsema
                    </h4>
                    <div className='testImgC'>
                        <img className='testImg' src={pic} alt="review"/>
                    </div>
                </div>
                <p>Thank you for being my perfect tailor. I love my Kaftan a lot.</p>
            </div>
        </div>
        <button className='rBtn'>Client Reviews</button>
    </div>
  )
}
