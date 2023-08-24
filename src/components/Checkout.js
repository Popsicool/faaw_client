import React from 'react'
import mastercard from "../assets/mastercard.png"

export const Checkout = (props) => {
    const cart = props.cart
    const price = props.price
  return (
    <div className='eCart'>
        <form>
            <div className='emptyBlack'></div>
            <div className='eCartBody'>
                {/* <form> */}
                <p className='cartCart'>Checkout</p>
                <p>Deliver Address</p>
                <hr/>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label>First name*</label><br/>
                            <input className='checkoutInput'/><br/>
                        </div>
                        <div className='col-md-6'>
                            <label>Last name*</label><br/>
                            <input className='checkoutInput'/><br/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label>Country/Region*</label><br/>
                            <input className='checkoutInput' placeholder='Select Country/Region'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label>Street Address*</label><br/>
                            <input className='checkoutInput' placeholder='House number and street name'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label>Town/City*</label><br/>
                            <input className='checkoutInput'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label>Order Notes (Optional)*</label><br/>
                            <textarea 
                                placeholder='Notes about your order, e.g. Special notes for delivery.'
                                className='checkoutTextArea' rows={10}/>
                        </div>
                    </div>
            </div>
            <div className='checkoutBottom'>
                <div className='checkoutBottomR'>
                    <p>Your Order</p>
                    <div className='fle'>
                        <p>Product</p>
                        <p>Subtotal</p>
                    </div>
                    <hr/>
                    {cart.map((each, idx) => (
                        <div>
                            <div className='fle'>
                                <div>
                                    <p className='tableP'>{each.name}</p>
                                    <p className='tableP2'>Color: {each.color_choice.charAt(0).toUpperCase() + each.color_choice.slice(1) }</p>
                                    <p className='tableP'>Size: <span className='sS'>{each.size_choice}</span></p>
                                </div>
                                <p>{each.quantity_choice} x &#8358;{each.new_price.toLocaleString()}.00</p>
                            </div>
                            <hr/>
                        </div>
                    ))}
                    <div className='fle'>
                        <p>Total</p>
                        <p>&#8358;{price.toLocaleString()}.00</p>
                    </div>
                    <hr/>
                    <input type='radio' name="payment_option" value="card" id="cardPay" className='checkoutRadio'/>
                    <label for="cardPay">Make payment using your credit and debit card</label><br/>
                    <div className='col-md-6 btRight cardOption'>
                        <div className='guarantee'><p className='guara guara2'>Secured by Paystack</p></div>
                        <div className='cartCard'>
                            <div>
                                <img src={mastercard} alt="mastercard"/>
                            </div>
                        </div>
                    </div>
                    <input type='radio' name="payment_option" id="dBank" value="bank" className='checkoutRadio'/>
                    <label for="dBank">Direct bank transfer</label><br/>
                    <div className='bankStuff'>
                        <p>Make your payment directly into our bank account.</p>
                        <button>Generate bank details</button>
                    </div>
                    <p>Note: all personal data you give us will be used to process your order, Support your experience throughout this website, and for other purposes described in our Privacy and Policy</p>
                    <input type="checkbox" id="chBox" className='checkoutRadio'/><label for="chBox">I have read and agree to the website <span>terms and condition</span></label>
                    <button className='cartBoxBtn'>Place Order</button>
                    {/* </form> */}
                </div>
            </div>
        </form>
    </div>
  )
}
