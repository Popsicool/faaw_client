import React, {useEffect} from 'react'

export const ScrollToTop = ({children}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <>{children}</>
  )
}
