import React, {useContext} from 'react'
import { UserContext } from '../App'
import { Navigate, useLocation } from 'react-router-dom'

export const Checkselected = ({children}) => {
    const selected = useContext(UserContext).selected
    const location = useLocation()
    if (!selected){
        return <Navigate to = '/' state ={{ path : location.pathname }}/>
    }
  return children
}