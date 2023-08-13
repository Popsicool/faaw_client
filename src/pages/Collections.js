import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import collData from '../data/CollData'
import "../styles/collections.css"
import star from "../assets/stars.png"
import star1 from "../assets/stars1.png"
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom';


export const Collections = () => {
    const navigate = useNavigate()
    const { name } = useParams()
    const colItem = collData.find(obj => obj.name === name)
    const updateSelected = useContext(UserContext).updateSelected
    const addToCart = (props) => {
      updateSelected(props)
      navigate("/addToCart",)
    }

  return (
    <div className="collections">
            <div className='colTop' style={{backgroundImage: `url(${colItem.img})`}}>
              <p className='colTitle'>{name}</p>
            </div>
            <div className='colBottom'>
              <div className='row gx-4'>
                {colItem.items.map((each, index) => (
                  <div className='col-md-4 colCard' key={index}>
                    <div className='colCardTop'>
                      <img className='colCardTopImg' src={each.img} alt="collImg"/>
                    </div>
                    <div className='colCardBottom'>
                      <p>{colItem.name} set</p>
                      <p>{each.name}</p>
                      <p>
                      {each.old_price && <s>&#8358;{each.old_price}</s>}  &#8358;{each.new_price}
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
                      <p><button className='btS' onClick={() => addToCart(each)}>Select Options</button></p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
    </div>
  )
}
