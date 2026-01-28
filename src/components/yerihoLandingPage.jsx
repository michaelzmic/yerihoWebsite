import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './yerihoLandingPage.css';

import imageOne from '../assets/images/dekel.png';
import imageTwo from '../assets/images/tamar.png';
import backgroundImage from '../assets/images/background.png';
import secondBgImage from '../assets/images/second-background.png'; 
import semel from '../assets/images/Semel.png'; 
import yehidot from '../assets/images/yehidot.png'; 
import contact from '../assets/images/contact.png'; 
import line from '../assets/images/Line.png'; 



const YerihoLandingPage = () => {
  //  // Disable Ctrl+Scroll zoom--------------------------
  //  useEffect(() => {
  //    const handleWheel = (e) => {
  //      if (e.ctrlKey) {
  //        e.preventDefault();
  //      }
  //    };

  //    const handleKeydown = (e) => {
  //      // Prevent Ctrl + Plus/Minus/0
  //      if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) {
  //       e.preventDefault();
  //     }
  //    };

  //    window.addEventListener('wheel', handleWheel, { passive: false });
  //    window.addEventListener('keydown', handleKeydown);

  //    return () => {
  //      window.removeEventListener('wheel', handleWheel);
  //      window.removeEventListener('keydown', handleKeydown);
  //    };
  //  }, []);
  //  // Disable Ctrl+Scroll zoom--------------------------



  const dynamicBackgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  };

  const secondSectionStyle = {
    backgroundImage: `url(${secondBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh', 
    width: '100%'
  };

  return (
    <>
      {/* SECTION 1: Main landing */}
      <div style={dynamicBackgroundStyle}>
        

       
          <Link 
            to="/page-one" 
            className="image-wrapper" 
            target="_blank" 
            rel="noopener noreferrer"
          >
           
            <div className="beams-light"></div>
            <img src={imageOne} alt="Dekel" className="nav-image" />
            <div className="text-overlay">צוות דקל</div>
            
          </Link>

          <Link 
            to="/page-two" 
            className="image-wrapper" 
            target="_blank" 
            rel="noopener noreferrer"
          >
           
            <div className="beams-light"></div>
            <img src={imageTwo} alt="Tamar" className="nav-image" />
            <div className="text-overlay">צוות תמ"ר</div>
          
          </Link>
        </div>

      {/* SECTION 2: Below the fold */}
        <section style={secondSectionStyle}>
       

          
          <img src={semel} alt="Semel" className="semel-logo" />
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>


      
          <img src={yehidot} alt="Menu Items" className="menu-image" />

         {/* line */}
          <img src={line} alt="Menu Items" className="line-image" />

        {/* Bottom contact info */}
          <img src={contact} alt="Contact" className="contact-image" />
      </section>
    </>
  );
};

export default YerihoLandingPage;


//Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.