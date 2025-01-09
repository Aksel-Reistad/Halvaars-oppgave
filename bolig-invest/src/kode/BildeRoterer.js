import React, { useEffect, useState } from 'react';
//vis jeg fikser en dattabase husk å dra bildene derfra sammen med teksten jeg skal linke til det 
import img1 from '../bilder/1.jpg';
import img2 from '../bilder/2.jpg';
import img3 from '../bilder/3.jpg';

const Roterer = () => {
  const images = [img1, img2, img3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        console.log("den endrer seg på grunnen av tid");
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
    // fjern senere i prosjektet når jeg har ettablert sidene fordi form og størelse bør styres derfra 
      style={{
        height: '70vh',
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
    <button 
    onClick={() => {setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
     console.log('Button clicked!');

    }}

        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          padding: '10px 20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        neste bilde 
      </button>
    </div>
  );
};

export default Roterer;
