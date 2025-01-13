import React, { useEffect, useState } from 'react';
import img1 from '../bilder/1.jpg';
import img2 from '../bilder/2.jpg';
import img3 from '../bilder/3.jpg';

const RotererAn = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (showText) {
      return; // Stopper bilderotasjonen når showText er true
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Rydder opp intervallet når komponenten fjernes eller showText endres
  }, [images.length, showText]);

  const toggleText = () => {
    setShowText((prevShowText) => !prevShowText);
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '70vh',
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      {/* Klikkbart område i øvre høyre hjørne */}
      <div
        onClick={toggleText}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '10px 20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          cursor: 'pointer',
          borderRadius: '5px',
          fontSize: '14px',
        }}
      >
        {showText ? 'Lukk' : 'Ansat Informasjon'}
      </div>

      {/* Tekst som vises når showText er true */}
      {showText && (
        <div
          style={{
            position: 'absolute',
            top: '90%',
            left: '50%',
            transform: 'translate(-50%, -10%)',
            padding: '20px 30px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: 'black',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
          }}
        >
          <h3>Ansat: lorem ipsum</h3>
          <p>
            lorem ipsum lorem ipsum<br /> 
            lorem ipsum lorem ipsum<br />
            lorem ipsum lorem ipsum<br /> 
            lorem ipsum lorem ipsum
          </p>
        </div>
      )}
    </div>
  );
};

export default RotererAn;
