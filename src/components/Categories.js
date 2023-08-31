import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
export const Categories = () => {
    const coldata = useContext(UserContext).cdata
  return (
    <>
        {coldata?.map((each, index) => (
                <div className='col-lg-3 col-md-4 col-sm-6 col-6' key={index}>
                    <div className='cZ'>
                        <div className='sImgCont'>
                            <img src={each.img} alt={each.name} className='sImage'/>
                        </div>
                        <div className=''>
                            <p className="catName">{each.name}</p>
                            <Link to={`/shop/${each.name}`}><button className='dBtn vOp'>View Options</button></Link>
                        </div>
                    </div>
                </div>
            ))}
    </>
  )
}
