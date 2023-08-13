import React, {useContext} from 'react'
import { UserContext } from '../App'
import { toast } from 'react-toastify';

export const Cart = () => {
    const cart = useContext(UserContext).cart
    const deleteItem = useContext(UserContext).deleteItem
    const rmv = (idx) => {
      deleteItem(idx)
      toast.success("Item removed from cart", {
        position:"top-right"})
    }
  return (
    <div className='cart'>
        {cart.map((each, idx) => (
            <div key={idx}>
                <p>Price: {each.new_price}</p>
                <p>Quantity: {each.quantity}</p>
                <button onClick={() => rmv(idx)}>Delete</button>
            </div>
        ))}
    </div>
  )
}
