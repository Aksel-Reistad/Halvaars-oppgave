
import Roterer from '../kode/BildeRoterer.js';
import Skjema from '../kode/Skema.js';


function Hjemmeside() {

  const rotererStyle = {
    height: '50vh',
    width: '70vh',  
    borderRadius: '15px', // Legg runder av hjørnene
    border: '0.4vh solid #ddd', // Legg til en grå kantlinje
  };

  return (
    <div className="App">

      <Roterer style={rotererStyle} />
      
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

export default Hjemmeside;

