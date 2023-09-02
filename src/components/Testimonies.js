import React, {useState} from 'react'
import pic from "../assets/pic1.png"
import "../styles/testimonies.css"
export const Testimonies = () => {
    const slidesData = [
        {
            image: pic,
            name:'Idris Nola',
            text: 'I just got some pictures from the wedding I wore the agbada too. I love it. Thank you.',
        },
        {
            image: pic,
            name:'Mark Olumide',
            text: 'Hey, Brother. just me using this opportunity to tell you that you’ve got gifted hands. And you can only get better man. you’re good at what you do. That’s all you. LIVE in the UK. I am getting a lot of compliments for it.',
        },
        {
            image: pic,
            name:'Ope Oritsema',
            text: 'Thank you for being my perfect tailor. I love my Kaftan a lot.',
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };
  const currentSlideData = slidesData[currentSlide];
  return (
    <div className='testimonies'>
        <div className='ds1 reveal'>
                <h2 className='dT1 testTxxt'>Testimonials</h2>
            </div>
        <div className='allTest reveal'>
            <div className='revCont'>
                <div className="revieW">
                    <div className='testTop'>
                        <div className='testImgC'>
                            <img className='testImg' src={slidesData[0].image} alt="review"/>
                        </div>
                        <h4>
                            {slidesData[0].name}
                        </h4>
                    </div>
                    <p>{slidesData[0].text}</p>
                </div>
                <div className="revieW reviewMiddle">
                    <div className='testTop'>
                        <div className='testImgC testImgCenter'>
                            <img className='testImg testImgCenter' src={slidesData[1].image} alt="review"/>
                        </div>
                        <h4>
                            {slidesData[1].name}
                        </h4>
                    </div>
                    <p>{slidesData[1].text}</p>
                </div>
                <div className="revieW">
                    <div className='testTop'>
                        <h4>
                            {slidesData[2].name}
                        </h4>
                        <div className='testImgC'>
                            <img className='testImg' src={slidesData[2].image} alt="review"/>
                        </div>
                    </div>
                    <p>{slidesData[2].text}</p>
                </div>
            </div>
        </div>
        <div className='revCont revContMobile'>
            <div className="revieW">
                <div className='testTop'>
                        <div className='testImgC'>
                            <img className='testImg' src={currentSlideData.image} alt="review"/>
                        </div>
                        <h4>
                            {currentSlideData.name}
                        </h4>
                    </div>
                <p>{currentSlideData.text}</p>
            <div className='leftRight2'>
                <button onClick={previousSlide} className='gtlT2'>&lt;</button> <button onClick={nextSlide} className='gtlT2'>&gt;</button>
            </div>
            </div>
        </div>
        {/* <div className="slider">
            <div className="slide">
                <img src={currentSlideData.image} alt={`Slide ${currentSlide + 1}`} />
                <p>{currentSlideData.text}</p>
            </div>
            <button onClick={previousSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
        </div> */}
        <button className='rBtn'>See Our Client Reviews</button>
    </div>
  )
}
