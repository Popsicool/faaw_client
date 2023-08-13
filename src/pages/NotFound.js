import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/notfound.css"

export const NotFound = () => {
  return (
    <div className='notFound'>
        <div>Werey, Watin you find come here??</div>
        <div><Link to='/'><button className='btS'>Fuck off and Go home</button></Link></div>
    </div>
  )
}
