import React from 'react'
import { Link } from 'react-router-dom'
import error from "../assets/notFound.jpg"
import "../styles/notfound.css"

export const NotFound = () => {
  return (
    <div className='notFound'>
      <p className="nFBold">Oops!</p>
      <img src={error} alt="error"/>
        <p className="nFBold">Sorry, The page you are looking for doesn't exist.</p>
        <p>If you think something went wrong, please report a problem</p>
        <div className='errBtn'><Link to='/' className='errorLink'><button className='Ebt'>Go home</button></Link> <Link to='/' className='errorLink'><button className='Ebt Ebt2'>Contact us</button></Link></div>
    </div>
  )
}
