import logo from './logo.svg';
import './App.css';
import "./bilder/1.jpg";
import "./bilder/2.jpg";
import "./bilder/3.jpg";
import Roterer from'./kode/BildeRoterer.js';

function App() {
  return (
    <div className="App">
      
      <Roterer></Roterer>
    

      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
