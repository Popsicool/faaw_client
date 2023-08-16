import React, {useEffect} from 'react'
import { Hero } from '../components/Hero'
import { Testimonies } from '../components/Testimonies'
import { About } from '../components/About'
import { Designs } from '../components/Designs'

export const Home = () => {
  useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    }, [])
  return (
    <div>
      <Hero/>
      <Designs/>
      <About/>
      <Testimonies/>
    </div>

  )
}
