import React from 'react'
import SmartSlider from "react-smart-slider";
import "../styles/testSlider.css"
import styldata from '../data/styleData';
import { Link } from 'react-router-dom'

const DummyCaption = (prop) => {
  const item = prop.prop;
  return(
    <div>
      {item.map((each, index) => (
            <div className='cY' key={index}>
                <div className='cZ2'>
                  <div className='sImageCont'>
                    <img src={each.img} alt='p1' className='sImage'/>
                  </div>
                    <div><Link to={`/collections/${each.name}`}><button className='sBs'>{each.name} Collection</button></Link> </div>
                </div>
            </div>
      ))}
    </div>

  )
}

export const SliderTest = () => {
  const arrayOfObjects = styldata; // Your array here

// Function to divide the array into subarrays of specified size
  function chunkArray(array, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }

  // Divide the array into subarrays of three objects each
  const subArraysOfThree = chunkArray(arrayOfObjects, 3);
    const slidesArray = [];
  subArraysOfThree.forEach(element => {
    slidesArray.push({
      childrenElem: <DummyCaption prop = {element} />
    })
  });

  return (
    <div>
      <SmartSlider
          slides={slidesArray}
          buttonShape="square" // round or square
        />

    </div>
  )
}
