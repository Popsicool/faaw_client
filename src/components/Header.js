import React, {useContext, useState} from 'react'
import "../styles/header.css"
import { NavLink } from "react-router-dom"
import faaw from '../assets/faaw.png'
import location from "../assets/location.png"
import { UserContext } from '../App'
import { CartPopup } from './CartPopup'


export const Header = () => {
    const cart = useContext(UserContext).cart
    const [isCartOpen, setIsCartOpen] = useState(false)
    let price = 0;
    cart.forEach(element => {
        price += element.new_price * element.quantity_choice
    });
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
                    <NavLink to='/'>
                        <div className='faawlogo'>
                            <img src={faaw} alt='faaw logo'/>
                        </div>
                        <p className='hoF'>House of <span>FAAW</span></p>
                    </NavLink>
                </div>
                <div className='navbarss'>
                    <nav>
                        <div className='hd'>.</div>
                        <ul>
                            <NavLink to='/'>
                                <li className='lks'>
                                    <p>Home</p><p className='ic'><i className='fa fa-angle-down'></i></p>
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                <li className='lks'>
                                    <p>Shop</p><p className='ic'><i className='fa fa-angle-down'></i></p>
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                <li className='lks'>
                                    <p>About</p><p className='ic'><i className='fa fa-angle-down'></i></p>
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                <li className='lks'>
                                    <p>Contact</p><p className='ic'><i className='fa fa-angle-down'></i></p>
                                </li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
                <div>
                    <div className='hd'>.</div>
                        <div className='cBox' onClick={() => setIsCartOpen(true)}>
                            <p>&#8358;{price.toLocaleString()}.00</p>
                            <p className='cartBox'><span style={{fontSize:"1rem"}}>{cart.length}</span></p>
                        </div>
                </div>
            </div>
            {isCartOpen &&
                <CartPopup handleClick={setIsCartOpen} />
            }

    </div>
  )
}
