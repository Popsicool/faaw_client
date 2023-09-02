import React, { useEffect, useState } from 'react'
import "../styles/hero.css"
import styldata from '../data/styleData';
import heroBG from '../assets/heroBG.png'
import piece from '../assets/piece.png'
import { Link } from 'react-router-dom'
export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroData = [
    {
      backgroundImage: `url(${heroBG})`,
      text1: 'Confidence  .  Comfort  .  Class',
      text2: 'Saunter In For a Great Experience',
      link: '/shop/Kaftans',
    },
    {
      backgroundImage: `url(${piece})`,
      text1: 'Available Designs',
      text2: 'Let’s explore some of the pieces elegant individuals like you picked',
      link: '/shop/Kaftans',
    },
    // {
    //   backgroundImage: `url(${heroBG})`,
    //   text1: 'Confidence  .  Comfort  .  Class3',
    //   text2: 'Saunter In For a Great Experience',
    //   buttonLabel: 'Button 3',
    // },
  ]
  styldata.forEach(element => {
      var newBG = {};
      newBG.backgroundImage =  `url(${element.img})`
      newBG.text1 = element.name + ' Collection'
      newBG.text2 = element.desc
      newBG.link = `/collections/${element.name}`
      heroData.push(newBG)
    });
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => {
      clearInterval(timer);
    };
  }, [heroData.length]);
  const currentHero = heroData[currentIndex];
  return (
    <div className='heroParent' style={{
        backgroundImage: currentHero.backgroundImage,
        transition: 'background-image 2s ease-in-out',
      }}>
        <div className='heroChild'>
          <div className='heroInner'>
            <h3 className='conf'>{currentHero.text1}</h3>
            <p className='saunt'>{currentHero.text2}</p>
            <Link to={currentHero.link}>
              <button className='shopNow'>Shop Now</button>
            </Link>
          </div>
        </div>
    </div>
  )
}
