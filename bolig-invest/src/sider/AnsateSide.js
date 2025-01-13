import React from 'react';
import RotererAn from '../kode/BildeRotererAnsate.js';
import VideoPlayer from '../kode/Video.js';
import videoFile from "../bilder/video.mp4";


function AnsateSide() {

    const rotererStyle = {
      height: '50vh',
      width: '70vh',  
      borderRadius: '15px', // Legg runder av hjørnene
      border: '0.4vh solid #ddd', // Legg til en grå kantlinje
      display: 'flex',
      alignItems: 'center', // Sentrer vertikalt
      justifyContent: 'center', // Sentrer horisontalt
    };
  
    return (
      <div className="App">
        <h1>Dette er hjemesiden</h1>
  
        <RotererAn style={rotererStyle} />
        <VideoPlayer videoSrc={videoFile} />
       
      </div>
    );
  }

export default AnsateSide;
