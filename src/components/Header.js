import React, {useContext, useState} from 'react'
import "../styles/header.css"
import { NavLink, Link } from "react-router-dom"
import faaw from '../assets/faaw.png'
import location from "../assets/location.png"
import { UserContext } from '../App'
import coldata from "../data/CollData"


export const Header = () => {
    const cart = useContext(UserContext).cart
    const [showShop, setShowShop] = useState(false)
    let price = 0;
    cart.forEach(element => {
        price += element.new_price * element.quantity_choice
    });
    const offAll = () => {
        setShowShop(false)
    }
  return (
    <div className='headerCont'>
            <div className='header1'>
                <p>Need help? Call us: <a href="tel:+2348167721054" className='callus'>(+234) 81 677 210 54</a></p>
                <p>
                    <a className='callus' href="https://goo.gl/maps/MHaxhhniS1A29fwV7">
                    <img src={location} alt='location' />   Our store </a></p>

            </div>
                <div className='header2'>
                    <div>
                        <NavLink to='/' onClick={offAll}>
                            <div className='faawlogo hoF'>
                                <img src={faaw} alt='faaw logo'/>
                            </div>
                            <p className='hoF'>House of <strong>FAAW</strong></p>
                        </NavLink>
                    </div>
                    <div className='navbarss'>
                        <nav>
                            <div className='hd'>.</div>
                            <ul>
                                <NavLink to='/' onClick={offAll}>
                                    <li className='lks'>
                                        <p>Home</p><p className='ic'><i className='fa fa-angle-down'></i></p>
                                    </li>
                                </NavLink>
                                <div onClick={() => {
                                    offAll();
                                    setShowShop(!showShop)
                                }}>
                                    <li className='lks'>
                                        <p id='shopN' >Shop</p><p className='ic'><i className='fa fa-angle-down'></i></p>
                                        <div className={showShop ? 'dis': 'nodis'}>
                                            <ol>
                                                <li className='ddbl'>Product Categories</li>
                                            </ol>
                                            <ul>
                                                {coldata.map((each, idx) => (
                                                    <Link to={`/collections/${each.name}`} key={idx}>
                                                        <li className='ddsl' key={idx}>{each.name}</li>
                                                    </Link>
                                                ))}
                                            </ul>
                                            <ol>
                                                <li className='ddbl'><Link to= '/cart'>Cart</Link></li>
                                            </ol>
                                        </div>
                                    </li>
                                </div>
                                <NavLink to='/about' onClick={offAll}>
                                    <li className='lks'>
                                        <p>About</p><p className='ic'><i className='fa fa-angle-down'></i></p>
                                    </li>
                                </NavLink>
                                <NavLink to='/contact' onClick={offAll}>
                                    <li className='lks'>
                                        <p>Contact</p><p className='ic'><i className='fa fa-angle-down'></i></p>
                                    </li>
                                </NavLink>
                            </ul>
                        </nav>
                    </div>
                    <div>
                    <div className='hd'>.</div>
                    <NavLink to='/cart' onClick={offAll}>
                        <div className='cBox'>
                            <p>&#8358;{price.toLocaleString()}.00</p>
                            <p className='cartBox'><span style={{fontSize:"1rem"}}>{cart.length}</span></p>
                        </div>
                    </NavLink>
                    </div>
                </div>

    </div>
  )
}
