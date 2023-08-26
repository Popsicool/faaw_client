import { useEffect } from 'react';

function StickyNavigation() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.header2');
      const header = document.querySelector('.header1');
      if (window.pageYOffset > header.offsetHeight) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render any visible content
}

export default StickyNavigation;
