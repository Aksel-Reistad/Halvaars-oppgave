import React, { useEffect, useState } from 'react';
import img1 from '../bilder/1.jpg';
import img2 from '../bilder/2.jpg';
import img3 from '../bilder/3.jpg';

const Roterer = ({ style }) => {  
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      console.log('Endrer bilde basert på tid');
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const ForigeBilde = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log('Bilde klikket! Går til forrige bilde.');
  };

  const NesteBilde = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log('Knapp klikket! Går til neste bilde.');
  };

  return (
    <div
      onClick={ForigeBilde}
      style={{
        height: '50vh',
        width: '30vh',
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
        cursor: 'pointer',
        position: 'relative',
        ...style,
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation(); // Hindrer knappens klikk fra å trigge bildet sitt onClick
          NesteBilde();
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
        Neste bilde
      </button>
    </div>
  );
};

export default Roterer;
