import React, {useContext, useState } from 'react'
import times2 from "../assets/times2.png"
import { UserContext } from '../App'
import { toast } from 'react-toastify';

export const Basket = (props) => {
    // const cart = props.cart
    const [cartItems, setCartItems] = useState(props.cart);
    const rmv = props.rmv
    const setCart = useContext(UserContext).setCart
    const setShowCheck = props.setShowCheck
    const handleAdd = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity_choice < updatedCart[index].quantity) {
      updatedCart[index].quantity_choice += 1;
      setCartItems(updatedCart);
    }
  };
  const handleMinus = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity_choice > 1) {
      updatedCart[index].quantity_choice -= 1;
      setCartItems(updatedCart);
    }
  };
  const updateCart = () => {
    setCart(cartItems)
    toast.success("Cart Updated", {
        position:"bottom-right"})
  }
  return (
    <div className='eCart'>
            <div className='emptyBlack'></div>
            <div className='eCartBody'>
                <p className='cartCart'>Cart</p>
                <div className='tableWrapper'>
                    <div className='tWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                {/* <th></th> */}
                                <th className='tableP0 product'>Product</th>
                                <th className='tableP0'>Price</th>
                                <th className='tableP0'>Quantity</th>
                                <th className='tableP0'>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((each, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <div className='tableR'>
                                                <div className='itemImgCont itemImgCont2'>
                                                    <p className='deleteItem pad tX'><img className='times' onClick={() => rmv(idx)} src={times2} alt="times" /></p>
                                                    <img className='itemImg' src={each.img[0]} alt="item"/>
                                                </div>
                                                <div>
                                                    <p className='tableP'>{each.name}</p>
                                                    <p className='tableP2'>Color: {each.color_choice.charAt(0).toUpperCase() + each.color_choice.slice(1) }</p>
                                                    <p className='tableP'>Size: <span className='sS'>{each.size_choice}</span></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='tableP'><p className='pad'>&#8358;{each.new_price.toLocaleString()}.00</p></td>
                                        <td className='tableP'>
                                            {/* <div className='changNum'><button className='plus' onClick={() => updateNum("-")}>-</button><p className='num'>{number}</p><button className='plus' onClick={() => updateNum("+")}>+</button></div> */}
                                            <div className='pad changNum changNum2'><button className='plus ' onClick={() => handleMinus(idx)}>-</button><p className='num'>{each.quantity_choice}</p><button className='plus plus2' onClick={() => handleAdd(idx)}>+</button></div>
                                            </td>
                                        <td className='tableP price'><p className='pad'>&#8358;{(each.quantity_choice * each.new_price).toLocaleString()}.00</p></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                        <div className='upC'>
                            <button onClick={() =>  setShowCheck(true)}>Proceed Checkout</button>
                            <button onClick={updateCart}>Update Cart</button>
                        </div>
                </div>
            </div>
    </div>
  )
}
