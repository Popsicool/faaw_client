import React from 'react'
import { Hero } from '../components/Hero'
import { Testimonies } from '../components/Testimonies'
import { About } from '../components/About'
import { Designs } from '../components/Designs'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Designs/>
      <About/>
      <Testimonies/>
    </div>

  )
}
