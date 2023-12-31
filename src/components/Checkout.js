import React, { useState, useContext, useRef } from 'react'
import mastercard from "../assets/mastercard.png"
import { toast } from 'react-toastify';
import PaystackPop from '@paystack/inline-js'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom';
import Receipt from './Receipt';
import {PDFDownloadLink } from '@react-pdf/renderer';


export const Checkout = (props) => {
    const setCart = useContext(UserContext).setCart
    const cart = props.cart
    const price = props.price
    const [firstname, setFirstName] = useState("")
    const [refe, setReference] = useState("")
    const [email, setEmail] = useState("")
    const [lastname, setLastName] = useState("")
    const [country, setCountry] = useState("")
    const [street, setStreet] = useState("")
    const [town, setTown] = useState("")
    const [paymentChoice, setPaymentChoice] = useState("card")
    const [terms, setTerms] = useState("")
    const [note, setNote] = useState("")
    const navigate = useNavigate();
    const downloadLinkRef = useRef();
    const date = new Date().toLocaleDateString();

    const handleSubmit =  (e) => {
        e.preventDefault()
        let regex = new RegExp(/\S+@\S+\.\S+/);
        if(!terms){
            toast.error("Agree to the terms and condition", {
            position:"bottom-right"})
            return
        }
        if(!paymentChoice){
            toast.error("Select a payment option", {
            position:"bottom-right"})
            return
        }
        if (!firstname){
            toast.error("Please provide your First Name", {
            position:"bottom-right"})
            return
        }
        if (!email){
            toast.error("Please provide your Email", {
            position:"bottom-right"})
            return
        }
        let isValid = regex.test(email);
        if (!isValid){
            toast.error("Invalid Email format", {
            position:"bottom-right"})
            return
        }
        if (!lastname){
            toast.error("Please provide your Last Name", {
            position:"bottom-right"})
            return
        }
        if (!country){
            toast.error("Please Select your Country", {
            position:"bottom-right"})
            return
        }
        if (!street){
            toast.error("Please provide your Street adrress", {
            position:"bottom-right"})
            return
        }
        if (!town){
            toast.error("Please provide your Town Address", {
            position:"bottom-right"})
            return
        }
        var handler = PaystackPop.setup({
            key: 'pk_test_55c5062aab46e116b0d38175f3d30f57f888c0e8', // Replace with your public key
            email: email,
            amount: price * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
            currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
            // ref: 'YOUR_REFERENCE', // Replace with a reference you generated
            callback: function(response) {
            //this happens after the payment is completed successfully
                var reference = response.reference;
                setReference(reference)
                toast.success("Payment Succesful, Your goods will soon be ready for shipping", {
                    position:"bottom-right"})
                // const url = "http://localhost:8000/checkout";
                // let items = []
                // cart.forEach(element => {
                // items.push({
                //     "id": 1,
                //     "name": element.name,
                //     "colour": element.color_choice,
                //     "quantity": element.quantity_choice,
                //     "size": element.size_choice,
                //     "price": element.new_price
                //     })
                // });
                // var myHeaders = new Headers();
                // myHeaders.append('Content-Type', 'application/json');
                // var raw = JSON.stringify({
                // firstname,
                // lastname,
                // email,
                // country,
                // street,
                // town,
                // reference,
                // note,
                // amount: price,
                // items,
                // });
                // var requestOptions = {
                // method: 'POST',
                // headers: myHeaders,
                // body: raw,
                // };
                // fetch(url, requestOptions)
                const a = document.querySelector('#dload')
                a.click()
                setCart([])
                navigate('/', { replace: true });
            },
            onClose: function() {
                toast.error("Payment Cancelled", {
                    position:"bottom-right"})
            },
            });
        handler.openIframe();

    }
  return (
    <div className='eCart'>
        <form onSubmit={handleSubmit}>
            <div className='emptyBlack'></div>
            <div className='eCartBody'>
                <p className='cartCart'>Checkout</p>
                <p className='dAdd'>Deliver Address</p>
                <hr/>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label className="lbl">First name*</label><br/>
                            <input
                            className='checkoutInput fAl'
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            /><br/>
                        </div>
                        <div className='col-md-6 lN'>
                            <label className="lbl">Last name*</label><br/>
                            <input
                            className='checkoutInput fAl'
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            /><br/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className="lbl">Email*</label><br/>
                            <input className='checkoutInput'
                            placeholder='Your email address'
                            value={email}
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className="lbl">Country/Region*</label><br/>
                            <input className='checkoutInput'
                            placeholder='Select Country/Region'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className="lbl">Street Address*</label><br/>
                            <input className='checkoutInput'
                            placeholder='House number and street name'
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className="lbl">Town/City*</label><br/>
                            <input className='checkoutInput'
                            value={town}
                            onChange={(e) => setTown(e.target.value)}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className="lbl">Order Notes (Optional)*</label><br/>
                            <textarea
                                placeholder='Notes about your order, e.g. Special notes for delivery.'
                                className='checkoutTextArea' rows={10}
                                value={note}
                                onChange={(e) => setNote(e.target.value)}/>
                        </div>
                    </div>
            </div>
            <div className='checkoutBottom'>
                <div className='checkoutBottomR'>
                    <p className='yourOrder'>Your Order</p>
                    <div className='fle'>
                        <p className='yourProduct'>Product</p>
                        <p className='yourProduct'>Subtotal</p>
                    </div>
                    <hr/>
                    {cart.map((each, idx) => (
                        <div key={idx}>
                            <div className='fle'>
                                <div>
                                    <p className='st1'>{each.name}</p>
                                    <p className='st2'>Color: {each.color_choice.charAt(0).toUpperCase() + each.color_choice.slice(1) }</p>
                                    <p className='st1'>Size: <span className='sS sS2'>{each.size_choice}</span></p>
                                </div>
                                <p><span className='nT'>{each.quantity_choice}</span> x <span className='nTT'>&#8358;{each.new_price.toLocaleString()}.00</span></p>
                            </div>
                            <hr/>
                        </div>
                    ))}
                    <div className='fle'>
                        <p className='tota'>Total</p>
                        <p className='cl toT'>&#8358;{price.toLocaleString()}.00</p>
                    </div>
                    <hr/>
                    <input type='radio' name="payment_option" value="card" id="cardPay" checked className='checkoutRadio' onChange={(e) => setPaymentChoice(e.target.value)}/>
                    <label htmlFor="cardPay" className='makeSure'>Make payment using your credit and debit card</label><br/>
                    <div className='col-md-6 btRight cardOption'>
                        <div className='guarantee'><p className='guara guara2'>Secured by Paystack</p></div>
                        <div className='cartCard'>
                            <div>
                                <img src={mastercard} alt="mastercard"/>
                            </div>
                        </div>
                    </div>
                    <input type='radio' name="payment_option" id="dBank" value="bank" className='checkoutRadio' onChange={(e) => setPaymentChoice(e.target.value)}/>
                    <label htmlFor="dBank" className='makeSure'>Direct bank transfer</label><br/>
                    <div className='bankStuff'>
                        <p>Make your payment directly into our bank account.</p>
                        <button type='button' className='generateBtn'>Generate bank details</button>
                    </div>
                    <p className='tory'>Note: all personal data you give us will be used to process your order, Support your experience throughout this website, and for other purposes described in our <span className='cl tory2'>Privacy and Policy</span></p>
                    <input type="checkbox" id="chBox" className='checkoutRadio' onChange={(e) => setTerms(e.target.value)}/><label htmlFor="chBox" className='tory'>I have read and agree to the website <span className='cl tory2'>terms and condition</span></label>
                    <button className='generateBtn' >Place Order</button>

                </div>
            </div>
        </form>
        <a href={downloadLinkRef} style={{ display: 'none' }}>Download</a>
        <PDFDownloadLink style={{visibility:'none'}}  document={<Receipt date= {date} name={firstname} cart={cart} refNum={refe} price ={price.toLocaleString()}/>} fileName="faaw_receipt.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : <p id="dload">'Download PDF'</p>
        }
      </PDFDownloadLink>
    </div>
  )
}
