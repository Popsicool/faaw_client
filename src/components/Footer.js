import React, { useState} from 'react'
import { NavLink } from "react-router-dom"
// import fb from "../assets/fb.png"
import wa from "../assets/wa.png"
import tw from "../assets/tw.png"
import ins from "../assets/ins.png"
import dly from "../assets/dly.png"
import pym from "../assets/pym.png"
import { toast } from 'react-toastify';
import "../styles/footer.css"
export const Footer = () => {
  const [email, setEmail]= useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
        let regex = new RegExp(/\S+@\S+\.\S+/);
        let isValid = regex.test(email);
        if (!isValid){
          toast.error("Provide Email type Only", {
            position:"bottom-right"})
            return
        }
    // const url = "http://localhost:8000/subscribe";
    // var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // var raw = JSON.stringify({
    //   email,
    // });
    // var requestOptions = {
    // method: 'POST',
    // headers: myHeaders,
    // body: raw,
    // };
    // fetch(url, requestOptions)
    toast.success("Thank you for subscribing", {
            position:"bottom-right"})
    setEmail('')
  }
  return (
    <div>
      <footer>
        <div className='row footerTop'>
          <div className='col-md-7'>
            <div className='fT'>
              <h5>Subscribe to House of FAAW Blog Via Email</h5>
              <p>
                Enter Your email address to subscribe to House of <span style={{ fontWeight: 600 }}>FAAW</span> Blog, and receive notifications for discounted offers by email.
              </p>
            </div>
          </div>
          <div className='col-md-5'>
            <form onSubmit={handleSubmit}>
              <div className=''>
                <input
                  placeholder='Email address'
                  value={email}
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <button className='subBtn'>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <hr className='dividd' />
        <div className='footerBottom'>
          <div className='footerBottomLeft'>
            <h3>Contact</h3>
            <p>Shop M20, Joke plaza,</p>
            <p>bodija, Ibadan.oyo state.</p>
            <hr className='contDiver' />
            <div>
              <ul className='socialIcons'>
                <li>
                  <a href="https://www.twitter.com/houseoffaaw" target="_blank" rel="noopener noreferrer">
                    <img src={tw} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/houseoffaaw" target="_blank" rel="noopener noreferrer">
                    <img src={ins} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/message/OTU3J7OQR5Q5M1" target="_blank" rel="noopener noreferrer">
                    <img src={wa} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div className='footerBottomMiddle'>
            <div className='bM'>
              <div className='sIc'><img src={dly} alt='delivery' /></div>
              <div>
                <h5 className='sameSize'>Instant delivery</h5>
                <p className='same2'>Your orders are shipped out ASAP.</p>
              </div>
            </div>
            <div className='bM bM2'>
              <div className='sIc'><img src={pym} alt='payment' /></div>
              <div>
                <h5 className='sameSize'>Secured payment</h5>
                <p className='same2'>Your transactions with us are seamless and 100% secured.</p>
              </div>
            </div>
          </div>
          <div className='footerBottomRight'>
            <ul>
              <NavLink to='/'>
                <li className='sameSize'>
                  Home
                </li>
              </NavLink>
              <NavLink to='/shop/Kaftans'>
                <li className='sameSize'>
                  Shop
                </li>
              </NavLink>
              <NavLink to='/cart'>
                <li className='sameSize'>
                  Cart
                </li>
              </NavLink>
              <NavLink to='/policy'>
                <li className='sameSize'>
                  General business policy
                </li>
              </NavLink>
            </ul>

          </div>
        </div>
        <p className='copyright'>© {new Date().getFullYear()} House of FAAW | Privacy Policy</p>
      </footer>
      {/* <div className='bbb'></div> */}
    </div>
  )
}
