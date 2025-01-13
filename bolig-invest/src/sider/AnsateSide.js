import RotererAn from '../kode/BildeRotererAnsate.js';
import Roterer from '../kode/BildeRotererAnsate.js';
import Skjema from '../kode/Skema.js';

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
        dette er hjemesiden
  
        <RotererAn style={rotererStyle} />
        
       
      </div>
    );
  }

export default AnsateSide;
