import React from 'react'
import times from "../assets/times.png"
import times2 from "../assets/times2.png"

export const CartMain = (props) => {
    const handleClick = props.handleClick
    const cart = props.cart
    const setShowCheck = props.setShowCheck
    const rmv = props.rmv
    const setShowCart = props.setShowCart
    const price = props.price
  return (
    <div className='cartOverlay'>
        <div className='sCart'>
            <div className='shoppingCartDiv'>
                <p className='shoppingCartText'>Shopping Cart</p>
                <p className='times' onClick={handleClick} ><img src={times} alt='times'/></p>
            </div>
            <div>
                {cart.length ?
                <>
                {cart.map((each, idx) => (
                <div key={idx}>
                    <div className='itemRow'>
                        <div className='itemRowCol1'>
                            <div className='itemImgCont'>
                                <img className='itemImg' src={each.img} alt="item pics" />
                            </div>
                            <div className='itemRowText'>
                                <p className='itemRT1'>Two piece set</p>
                                <p className='itemRT2'>{each.name}</p>
                                <p className='itemRT1'>Size: {each.size_choice}</p>
                                {/* <p className='cls'>Color :<p className ="colorCircle circleSelected" style={{backgroundColor: `${each.color_choice}`}}></p>
                                </p> */}
                                <p className='itemRT4'>{each.quantity_choice} x &#8358;{each.new_price.toLocaleString()}.00</p>
                            </div>
                        </div>
                        <div>
                            <p className='deleteItem'><img className='times' onClick={() => rmv(idx)} src={times2} alt="times" /></p>
                        </div>
                    </div>

                </div>
                ))}
                <div className='cartBoxBottom bL'>
                    <p>Subtotal:</p>
                    <p>&#8358;{price.toLocaleString()}.00</p>
                </div>
                <div className='cartBoxCtn'>
                    <button className='cartBoxBtn' onClick={() => setShowCart(false)}>View Basket</button>
                    <button className='cartBoxBtn cartBoxBtn2' onClick={() => {setShowCart(false); setShowCheck(true)}}>CheckOut</button>
                </div>
                </>
            :
            <div className='noItem'>
                <p className='noItm'>No product in the cart.</p>
                <div className='cartBoxCtn'>
                    <button className='noItemBtn' onClick={handleClick}>Continue Shopping</button>
                </div>
            </div>
                }
            </div>
        </div>
    </div>
  )
}
