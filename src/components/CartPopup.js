import React, {useContext} from 'react'
import { UserContext } from '../App'
import { toast } from 'react-toastify';
import "../styles/cart.css"
// import times from "../assets/times.png"
import times2 from "../assets/times2.png"

export const CartPopup = (props) => {
    // const handleClick = props.handleClick
    const cart = useContext(UserContext).cart
    const deleteItem = useContext(UserContext).deleteItem
    let price = 0;
    cart.forEach(element => {
        price += element.new_price * element.quantity_choice
    });
    const rmv = (idx) => {
      deleteItem(idx)
      toast.success("Item removed from cart", {
        position:"bottom-right"})
    }
  return (
    <div className='cartOverlay'>
        <div className='cart'>
            <div className='shoppingCartDiv'>
                <p className='shoppingCartText'>Shopping Cart</p>
                {/* <p className='times' onClick={() => handleClick(false)} ><img src={times} alt='times'/></p> */}
            </div>
            <hr/>
            <div>
                {cart.length ?
                <>
                {cart.map((each, idx) => (
                <div key={idx}>
                    <div className='itemRow'>
                        <div className='itemImgCont'>
                            <img className='itemImg' src={each.img} alt="item pics" />
                        </div>
                        <div>
                            <p>Two piece set</p>
                            <p>{each.name}</p>
                            <p>Size: {each.size_choice}</p>
                            <p className='cls'>Color :<p className ="colorCircle circleSelected" style={{backgroundColor: `${each.color_choice}`}}></p>
                            </p>
                            <p>{each.quantity_choice} x &#8358;{each.new_price.toLocaleString()}.00</p>
                        </div>
                        <p>
                            <p className='deleteItem'><img className='times' onClick={() => rmv(idx)} src={times2} alt="times" /></p>
                        </p>
                    </div>
                    {idx !== cart.length - 1 && <hr/>}
                </div>
                ))}
                <hr/>
                <div className='cartBoxBottom bL'>
                    <p>Subtotal:</p>
                    <p>&#8358;{price.toLocaleString()}.00</p>
                </div>
                <hr/>
                <div className='cartBoxCtn'>
                    <button className='cartBoxBtn'>View Basket</button>
                    <button className='cartBoxBtn cartBoxBtn2'>CheckOut</button>
                </div>
                </>
            :
            <div className='noItem'>
                <p className='noItm'>No product in the cart.</p>
                <div className='cartBoxCtn'>
                    <button className='noItemBtn'>Continue Shopping</button>
                </div>
            </div>
                }
            </div>

        </div>
    </div>
  )
}
