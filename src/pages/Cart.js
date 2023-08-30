import React, {useContext, useState} from 'react'
import { UserContext } from '../App'
import { toast } from 'react-toastify';
import "../styles/cart.css"
import { useNavigate } from 'react-router-dom';
import { Checkout } from '../components/Checkout';
import { Basket } from '../components/Basket';
import { CartMain } from '../components/CartMain';

export const Cart = () => {
    const navigate = useNavigate()
    const cart = useContext(UserContext).cart
    const deleteItem = useContext(UserContext).deleteItem
    const [showcart, setShowCart] = useState(!true)
    const [showCheck, setShowCheck] = useState(false)
    const handleClick = () => {
        navigate(-1)
    }
    let price = 0;
    cart.forEach(element => {
        price += element.new_price * element.quantity_choice
    });
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    const rmv = (idx) => {
      deleteItem(idx)
      toast.success("Item removed from cart", {
        position:"bottom-right"})
    }
  return (
    <>
    {showcart ?
    <CartMain
    cart={cart} handleClick={handleClick} setShowCheck={setShowCheck} rmv={rmv} setShowCart={setShowCart} price={price}/>
    :
    <>
    {!showCheck ?
    <Basket cart={cart} setShowCheck={setShowCheck} rmv={rmv}/>
    :
        <Checkout cart={cart} price={price}/>
    }
    </>
}
    </>
  )
}
