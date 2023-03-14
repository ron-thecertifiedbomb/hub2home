
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

  
const BackToTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500){
      setVisible(true)
    } 
    else if (scrolled <= 500){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none', color: '#F02F1B', fontSize: '30px'}} />
    </button>
  );
}
  
export default BackToTop;