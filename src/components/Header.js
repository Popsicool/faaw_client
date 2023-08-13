import React, {useContext} from 'react'
import "../styles/header.css"
import { NavLink } from "react-router-dom"
import faaw from '../assets/faaw.png'
import location from "../assets/location.png"
import { UserContext } from '../App'


export const Header = () => {
    const cart = useContext(UserContext).cart
    let price = 0;
    cart.forEach(element => {
        price += element.new_price * element.quantity_choice
    });
  return (
    <div>
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
                                    Home    <i className='fa fa-angle-down'></i>
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                <li className='lks'>
                                    Shop    <i className='fa fa-angle-down'></i>
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                <li className='lks'>
                                    About    <i className='fa fa-angle-down'></i>
                                </li>
                            </NavLink>
                            <NavLink to='/'>
                                <li className='lks'>
                                    Contact    <i className='fa fa-angle-down'></i>
                                </li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
                <div>
                    <div className='hd'>.</div>
                    <NavLink to='/cart'>
                        <div className='cBox'>
                            <p>#{price}.00</p>
                            <p className='cartBox'><span style={{fontSize:"1rem"}}>{cart.length}</span></p>
                        </div>
                    </NavLink>
                </div>
            </div>

    </div>
  )
}
