import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/notfound.css"

export const NotFound = () => {
  return (
    <div className='notFound'>
        <div>Comrade Relax, I never code this page abegiiii </div>
        <div><Link to='/'><button className='btS'>Go home</button></Link></div>
    </div>
  )
}
