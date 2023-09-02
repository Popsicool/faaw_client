import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

export const Collections = () => {
  const styldata = useContext(UserContext).cldata
  return (
    <div className='row gx-3 collections'>
      {styldata?.map((each, idx) => (
        <div className='col-4' key={idx}>
          <div className='col-Img'>
            <img src={each.img} alt="col"/>
          </div>
          <Link to={`/collections/${each.name}`}><button className='col-btn'><p>{each.name}</p><p>Collections</p></button></Link>
        </div>
      ))}
    </div>
  )
}
