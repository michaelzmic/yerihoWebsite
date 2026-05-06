import React, { useState, useEffect } from 'react';
import './Carousel.css';

// Pre-filled data using the exact text and design colors from your screenshots!
const defaultData = [
  {
    id: 1,
    title: 'תיק תמר',
    description: 'מסמך PDF מודיעיני המכיל בתוכו מענה על שאלות הציח שהתקבלו (לדוג\' תוכנית קומה, שיטות וחומרי בנייה, מיקוד חדר לקומה ומפנה וכו..). בכל תיק מפורטת סבירות התוצר, בהתאם למודיעין שהתקבל ולהערכה אדריכלית. ניתן לקבל תוצר זה גם מותאם לסל"ולר.',
    image: 'https://placehold.co/400x500/e0e0e0/ffffff?text=Slide+1+Image', // Replace with your white notebook image path
    themeColor: '#ae9ecb',       // Light purple
    themeColorDark: '#8b78b6',   // Dark purple 
    bgGradient: 'linear-gradient(135deg, #fefefe 0%, #ebe7f2 100%)' // Subtle purple background
  },
  {
    id: 2,
    title: 'מודל תמר',
    description: 'מסמך PDF (!) המכיל מודל תלת מימדי של המבנה. במודל אפשר לראות את הקומות השונות, לסובב ולמדוד. ניתן לפתוח אותו באמצעות תוכנת Acrobat (זמינה להורדה ב Software Center) או לצרוך ברשת ע"י שימוש באתר המשקף.',
    image: 'https://placehold.co/500x400/ffeec2/ffffff?text=Slide+2+Image', // Replace with building model image path
    themeColor: '#efd5a6',       // Light yellow/tan
    themeColorDark: '#dcaa59',   // Darker orange/brown
    bgGradient: 'linear-gradient(135deg, #fffdf8 0%, #fef8eb 100%)' // Subtle yellow background
  },
  {
    id: 3,
    title: 'יהלום',
    description: 'מערכת סימולציה ותכנון. התוצר מכיל את האיתר המבוקש וסביבתו בתלת מימד. במערכת ניתן לעבור ל"מצב לוחם", לשרטט צירי תנועה, להציב אובייקטים ועוד. תוצר זה אינו תוצר בסיסי ובדר"כ משמש למבצעים מיוחדים. יש להוריד את תוכנת היהלום בכדי לצפות בתוצר.',
    image: 'https://placehold.co/600x400/b3d4f0/ffffff?text=Slide+3+Image', // Replace with city model image path
    themeColor: '#8fcdeb',       // Light blue
    themeColorDark: '#5aa3ce',   // Dark blue
    bgGradient: 'linear-gradient(135deg, #f2fafe 0%, #deeff9 100%)' // Subtle blue background
  }
];

const Carousel = ({ data = defaultData, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the automatic cycling of the carousel texts and images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, interval);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [data.length, interval]);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        {data.map((item, index) => {
          const isActive = index === currentIndex;
          
          return (
            <div 
              key={item.id} 
              className={`carousel-slide ${isActive ? 'active' : ''}`}
              // Pass custom colors as CSS variables so each slide has its own theme
              style={{
                '--theme-primary': item.themeColor,
                '--theme-secondary': item.themeColorDark,
                background: item.bgGradient
              }}
            >
              <div className="carousel-content">
                {/* RTL configuration puts this Text Section on the Right */}
                <div className="carousel-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button className="carousel-btn">לפורמט צי"ח</button>
                </div>

                {/* RTL configuration puts this Image Section on the Left */}
                <div className="carousel-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Optional: Navigation Dots indicating the current slide */}
      <div className="carousel-dots">
        {data.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
