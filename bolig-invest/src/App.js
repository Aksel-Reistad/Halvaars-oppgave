import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopLinker from './kode/Header.js';
import Hjemmeside from './sider/Hjemmeside.js';
import AnsateSide from './sider/AnsateSide.js';
import ProduktSide from './sider/ProduktSide.js';

function App() {
  return (
    <div>
      <Router>
        <TopLinker />
        <Routes>
          <Route path="/Hjemmeside" element={<Hjemmeside />} />
          <Route path="/AnsateSide" element={<AnsateSide />} />
          <Route path="/ProduktSide" element={<ProduktSide />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
