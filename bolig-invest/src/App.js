import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TopLinker from './kode/Header.js';
import Hjemmeside from './sider/Hjemmeside.js';
import AnsateSide from './sider/AnsateSide.js';
import ProduktSide from './sider/ProduktSide.js';

function App() {
  const NavigateOnLoad = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const hasNavigated = sessionStorage.getItem('hasNavigated');
      if (!hasNavigated) {
        navigate('/Hjemmeside'); // Naviger til Hjemmeside når siden starter første gang
        sessionStorage.setItem('hasNavigated', 'true'); // Marker at navigasjonen har skjedd
      }
    }, [navigate]);
    
    return null; // Denne komponenten returnere ikke noe
  };

  return (
    <div>
      <Router>
        <NavigateOnLoad />
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
