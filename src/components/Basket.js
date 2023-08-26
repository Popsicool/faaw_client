import React from 'react'
import times2 from "../assets/times2.png"

export const Basket = (props) => {
    const cart = props.cart
    const rmv = props.rmv
    const setShowCheck = props.setShowCheck
  return (
    <div className='eCart'>
            <div className='emptyBlack'></div>
            <div className='eCartBody'>
                <p className='cartCart'>Cart</p>
                <div className='tableWrapper'>
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
                            {cart.map((each, idx) => (
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
                                    <td className='tableP'><p className='pad'>{each.quantity_choice}</p></td>
                                    <td className='tableP price'><p className='pad'>&#8358;{(each.quantity_choice * each.new_price).toLocaleString()}.00</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        <div className='upC'>
                            <button>Update Cart</button>
                        </div>
                </div>
                <button onClick={() =>  setShowCheck(true)}>Proceed</button>
            </div>
    </div>
  )
}
