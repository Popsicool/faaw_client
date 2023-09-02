import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import "../styles/collections.css"
import star from "../assets/stars.png"
import star1 from "../assets/stars1.png"
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom';


export const CollectionPage = () => {
    const collData = useContext(UserContext).cdata
    const styldata = useContext(UserContext).cldata
    const navigate = useNavigate()
    const { name } = useParams()
    const col = styldata.filter((item) => item.name === name);
    const colItem = [];
    for (const category of collData) {
        for (const item of category.items) {
            if (item.collection === name) {
                item.cat = category.name;
                colItem.push(item);
            }
        }
    }
    const updateSelected = useContext(UserContext).updateSelected
    const addToCart = (props) => {
      updateSelected(props)
      navigate("/addToCart")
    }
  return (
    <div className="collections">
            <div className='colTop' style={{backgroundImage: `url(${col[0].img})`}}>
            <div className='heroChild'>
              <div className='heroInner'>
                <p className='colTitle'>{col[0].name}</p>
                <p className='colTitle2'>{col[0].desc}</p>
              </div>
            </div>
            </div>
            <div className='colBottom'>
              <div className='row gx-5'>
                {colItem?.map((each, index) => (
                  <div className='col-md-4 colCard reveal' key={index}>
                    <div className='colCardTop'>
                      <img className='colCardTopImg' src={each.img[0]} alt="collImg"/>
                    </div>
                    <div className='colCardBottom'>
                      <p className='colCardSet'>{each.cat} set</p>
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
                ))}

              </div>
            </div>
    </div>
  )
}
