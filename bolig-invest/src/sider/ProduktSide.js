// import './App.css';
import Roterer from'../kode/BildeRoterer.js';

function ProduktSide() {
  const rotererStyle = {
    height: '50vh',
    width: '70vh',
    borderRadius: '15px', // Runder hjørnene
    border: '0.4vh solid #ddd', // Legger til en grå kantlinje
  };
  
  const containerStyle = {
    display: 'flex', // Gjør elementene til en flex-container
    gap: '1rem', // Legger til mellomrom mellom elementene
    justifyContent: 'center', // Sentraliserer elementene horisontalt
    alignItems: 'center', // Sentraliserer elementene vertikalt
  };
  
  return (
    <div className="App">
      <p>Dette er vår produktside</p>
      <div style={containerStyle}>
        <Roterer style={rotererStyle} />
        <Roterer style={rotererStyle} />
      </div>
      
      <div className='tekst-Mellomrom'>
        
    
    <div className='tekst-bloker'>
      <div className='tekst-titel'>
      lorem ipsum
      </div>
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </div>

      <div className='tekst-bloker'>
      <div className='tekst-titel'>
      lorem ipsum
      </div>
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </div>

      <div className='tekst-bloker'>
      <div className='tekst-titel'>
      lorem ipsum
      </div>
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </div>

    </div>
    </div>
  );
}

export default ProduktSide;
