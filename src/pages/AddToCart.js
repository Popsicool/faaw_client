import React, {useContext, useState} from 'react'
import { UserContext } from '../App'
import { toast } from 'react-toastify';
import star from "../assets/stars.png"
import star1 from "../assets/stars1.png"
import check from "../assets/check.png"
import "../styles/addtocart.css"
import mastercard from "../assets/mastercard.png"
import collData from '../data/CollData'

export const AddToCart = () => {
    const selected = useContext(UserContext).selected
    const updateCart = useContext(UserContext).updateCart
    const [size, setSize] = useState(selected.size[0])
    const [color, setColor] = useState(selected.color[0])
    const [number, setNumber] = useState(1)
    const [selectDivIdx, setSelectdividx] = useState(0)
    const [showDescription, setShowDescription] = useState(false)
    const colItem = collData.find(obj => obj.name === selected.cat)
    const catitems = colItem.items.filter((obj) => obj.name !== selected.name);
    const updateSelected = useContext(UserContext).updateSelected
    const images = selected.img
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const onPrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

    let selectedItems;
    if (catitems.length >= 3) {
    selectedItems = catitems.slice(0, 3); // Select the first three items
    } else {
    selectedItems = catitems.slice(); // Select all items if less than three
    }
    const addToCart = (props) => {
      props.cat = selected.cat
      updateSelected(props)
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    }

    const addItem = () => {
        const chosen = {...selected}
        chosen.size_choice = size
        chosen.color_choice = color
        chosen.quantity_choice = number
        updateCart(chosen)
        toast.success("Item Added to cart", {
        position:"bottom-right"})
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
            <div className='col-md-6 conTop'>
                <img className='cartImg' src={images[currentIndex]} alt="selcted item"/>
                <div className='leftRight'>
                    <button onClick={onPrevClick} className='gtlT'>&lt;</button> <button onClick={onNextClick} className='gtlT'>&gt;</button>
                </div>
            </div>
            <div className='col-md-6 cartTopRight'>
                <div>
                    <p className='cartName'>{selected.name}</p>
                    <p className='cartPrice'>&#8358;{selected.new_price.toLocaleString()}.00</p>
                    <p className='cartStars'>
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
                    <p className='cartAvailable'>Availability: <span className='cartInstock'><img src={check} alt='check'/> <span className='cartInstock'>In stock</span></span></p>
                    <p className='cartHurray'>Hurry up! only {selected.quantity} product left in stock!</p>
                    <hr className='cartHr1'/>
                </div>
                <div>
                    <div className='cls'>Color : {selected.color.map((each, idx) => (
                        <div onClick={() => {setColor(each); setSelectdividx(idx)}}  className ={idx === selectDivIdx ? "colorCircle circleSelected"  : 'colorCircle'}  style={{backgroundColor: `${each}`}} key={idx}></div>
                    ))}
                    </div>
                    <p className='cls' style={{color:"#FFFFFF"}}>Size :</p>
                    <div className="custom-select">
                        <select onChange={(e) => {
                            setSize(e.target.value)
                        }} value={size}>
                            <option className='selectionOption'>Choose an option</option>
                            {selected.size.map((each, index) => (
                                <option className='selectionOption' defaultValue={index === 0} value={each} key={index}>{each}</option>
                            ))}
                        </select>
                    </div>
                    <div className='changNum'><button className='plus' onClick={() => updateNum("-")}>-</button><p className='num'>{number}</p><button className='plus' onClick={() => updateNum("+")}>+</button></div>
                    <p className='cartBtns'><button className='dBtn cartBtn' onClick={addItem}>Add to cart</button> <button className='dBtn cartBtn'>Buy it now</button></p>
                    <hr className='cartHr1'/>
                    <div>
                        <p>Sku: N/A  Categories: Adedrinoye set ,Kaftans set</p>
                        <p>Tags: <span className='selTag'>white Kaftans set</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 g-x-3 addCartBottom'>
                {images.length > 1 &&
                <div className='imgWap'>
                    <img src={images[1]} alt="item"/>
                </div>
                }
                {images.length > 2 &&
                <div className='imgWap'>
                    <img src={images[2]} alt="item"/>
                </div>
                }
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
        <div className='row'>
            <div className='dReview'><p className={showDescription ? "rv1 dRv1": "rv2 dRv1"} onClick={() => setShowDescription(true)}>Description</p><p onClick={() => setShowDescription(false)} className={showDescription ? "rv2 dRv": "rv1 dRv"}>Review(0)</p> <p className='rHr'></p> </div>
            {showDescription ?
            <div>
                <p className='whatYouGet'>
                    What you get;
                </p>
                <p className='whatYouGet'>
                    {selected.description}
                </p>
            </div>
            :
            <div className='review'>
                <p className='cusReview'>Customer reviews</p>
                <p className='cusRev'>No reviews yet</p>
                <div className='reviewForm'>
                    <form>
                        <label className='revlabel'>Your review*</label> <br/>
                        <textarea className='formTextArea'
                        rows={5}
                        /> <br/>
                        <label className='revlabel'>Name*</label> <br/>
                        <input className='formIn'/> <br/>
                        <label className='revlabel'>Email*</label> <br/>
                        <input className='formIn'/> <br/>
                        <button className='submitBtn'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            }
        </div>
        <div className='row'>
            <div className='relatedP'>
                <p>Related product</p>
                    <div className='row gx-5'>
                        {selectedItems.map((each, idx) => (
                        <div className='col-md-4 colCard colCd' key={idx}>
                            <div className='colCard2'>
                                <div className='colCardTop colCardTop2'>
                                <img className='colCardTopImg colCardTopImg2' src={each.img[0]} alt="collImg"/>
                                </div>
                                <div className='colCardBottom colCardBottom2'>
                                <p className='colCardSet'>{colItem.name} set</p>
                                <p className='colCardName'>{each.name}</p>
                                <p className='colCardPrice'>
                                {each.old_price && <s className='oldPrice'>&#8358;{each.old_price}</s>}  &#8358;{each.new_price}
                                </p>
                                <p>
                                    {Array.from({ length: each.stars }).map((_, index) => (
                                    <img className='sts'
                                        key={index}
                                        src={star1}
                                        alt="Star"
                                    />
                                    ))}
                                    {Array.from({ length: 5 - each.stars }).map((_, index) => (
                                    <img
                                        key={index}
                                        src={star}
                                        alt="Star"
                                    />
                                    ))}
                                </p>
                                <p><button className='dBtn dBtn2' onClick={() => addToCart(each)}>Select Options</button></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
