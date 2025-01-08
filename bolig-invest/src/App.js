import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Roterer from'./kode/BildeRoterer.js';
import TopLinker from './kode/Header.js';

function App() {
  return (
    <div className="header-tekst">
      <Router>
        <TopLinker />
        {/* <Roterer /> */}
      </Router>
    </div>
  );
}

export default App;
