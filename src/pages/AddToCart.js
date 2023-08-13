import React, {useContext, useState} from 'react'
import { UserContext } from '../App'
import { toast } from 'react-toastify';
import star from "../assets/stars.png"
import star1 from "../assets/stars1.png"
import check from "../assets/check.png"
import "../styles/addtocart.css"
import mastercard from "../assets/mastercard.png"

export const AddToCart = () => {
    const selected = useContext(UserContext).selected
    const updateCart = useContext(UserContext).updateCart
    const [size, setSize] = useState("M")
    const [color, setColor] = useState(selected.color[0])
    const [number, setNumber] = useState(1)
    const [selectDivIdx, setSelectdividx] = useState(0)

    const addItem = () => {
        selected.size_choice = size
        selected.color_choice = color
        selected.quantity_choice = number
        updateCart(selected)
        toast.success("Item Added to cart", {
        position:"top-right"})
    }
    const updateNum = (a) => {
        if (a === "+"){
            if (number < selected.quantity){
                setNumber(number + 1)
            }
        }
        else{
            if (number > 1){
                setNumber(number - 1)
            }
        }
    }
  return (
    <div className='addtocart'>
        <div className='row'>
            <div className='col-md-6'>
                <img className='cartImg' src={selected.img} alt="selcted item"/>
            </div>
            <div className='col-md-6'>
                <div>
                    <p>{selected.name}</p>
                    <p>{selected.new_price}</p>
                    <p>
                            {Array.from({ length: selected.stars }).map((_, index) => (
                            <img className='sts'
                                key={index}
                                src={star1}
                                alt="Star"
                            />
                            ))}
                            {Array.from({ length: 5 - selected.stars }).map((_, index) => (
                            <img
                                key={index}
                                src={star}
                                alt="Star"
                            />
                            ))}
                    </p>
                    <p>Availability: <img src={check} alt='check'/> <span>In stock</span></p>
                    <p>Hurry up! only {selected.quantity} product left in stock!</p>
                    <hr/>
                </div>
                <div>
                    <div className='cls'>Color : {selected.color.map((each, idx) => (
                        <div onClick={() => {setColor(each); setSelectdividx(idx)}}  className ={idx === selectDivIdx ? "colorCircle circleSelected"  : 'colorCircle'}  style={{backgroundColor: `${each}`}} key={idx}></div>
                    ))}
                    </div>
                    <p>Size :</p>
                    <div className="custom-select">
                        <select onChange={(e) => setSize(e.target.value)}>
                            {/* <option disabled>Choose an option</option> */}
                            {selected.size.map((each, index) => (
                                <option value={each} key={index} defaultValue = {each === "M"} >{each}</option>
                            ))}
                        </select>
                    </div>
                    <div className='changNum'><button className='plus' onClick={() => updateNum("-")}>-</button><p className='num'>{number}</p><button className='plus' onClick={() => updateNum("+")}>+</button></div>
                    <p className='cartBtns'><button className='cartBtn' onClick={addItem}>Add to cart</button> <button className='cartBtn'>Buy it now</button></p>
                    <hr/>
                    <div>
                        <p>Sku: N/A  Categories: Adedrinoye set ,Kaftans set</p>
                        <p>Tags: <span className='selTag'>white Kaftans set</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 g-x-3 addCartBottom'>
                <div className='imgWap'>
                    <img src={selected.img} alt="item"/>
                </div>
                <div className='imgWap'>
                    <img src={selected.img} alt="item"/>
                </div>
            </div>
            <div className='col-md-6 btRight'>
                    <div className='guarantee'><p className='guara'>Guaranteed Safe checkout</p></div>
                <div className='cartCard'> 
                    <div>
                        <img src={mastercard} alt="mastercard"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
