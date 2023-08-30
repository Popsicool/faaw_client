import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';

export function ScrollToTop({ children }) {
  const location = useLocation();
  const reveal = () => {
    var reveals = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight
      var revealtop = reveals[i].getBoundingClientRect().top
      var revealpoint = 150
      if (revealtop < windowheight - revealpoint){
        reveals[i].classList.add('showAnim')
      }
      else{
        reveals[i].classList.remove('showAnim')
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', reveal)
    window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
  }, [location]);

  return <>{children}</>;
}