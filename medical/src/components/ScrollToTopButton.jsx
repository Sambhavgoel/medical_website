import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop} 
      className="fixed bottom-4 right-4 bg-[#254336] text-[#E9EED9] p-4 rounded-full shadow-lg hover:bg-[#1f362a] hover:text-[#E9EED9] transition flex items-center justify-center"
    >
      <FontAwesomeIcon icon={faArrowUp} size="1x" />
    </button>
  );
};

export default ScrollToTopButton;
