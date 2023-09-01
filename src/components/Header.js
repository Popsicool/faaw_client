import React, {useContext, useState} from 'react'
import "../styles/header.css"
import { NavLink, Link } from "react-router-dom"
import faaw from '../assets/faaw.png'
import location from "../assets/location.png"
import openMenu from "../assets/open.png"
import closeMenu from "../assets/close.png"
import { UserContext } from '../App'


export const Header = () => {
    const cart = useContext(UserContext).cart
    const coldata = useContext(UserContext).cdata
    const [showShop, setShowShop] = useState(false)
    const [open, setOpen] = useState(false)

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
                    <img className='oSt' src={location} alt='location' />   Our store </a></p>

            </div>
                <div className='header2'>
                    <div className='hamburgerMenu'>
                        <div className='hamburgerImg' onClick={() => {
                                    offAll()
                                    setOpen(true)
                                }}>
                            <img src={openMenu} alt="open menu" className='hamMenu'/>
                        </div>
                        <NavLink to='/' onClick={offAll}>
                            <div className='hoff'>
                                <div className='faawlogo'>
                                    <img src={faaw} alt='faaw'/>
                                </div>
                                <p className='hoF'>House of <strong>FAAW</strong></p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='navbarss'>
                        <nav>
                            <div className='hd'>.</div>
                            <ul className={open ? 'showMenu' : 'normalMenu'}>
                                <div className='lks'>
                                    <p></p>
                                    <p>
                                        <img src={closeMenu} alt="close menu" onClick={() => {
                                        offAll()
                                        setOpen(false)
                                    }} className='hamMenu'/>
                                    </p>
                                </div>
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
                                                {coldata?.map((each, idx) => (
                                                    <Link to={`/shop/${each.name}`} key={idx}>
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
