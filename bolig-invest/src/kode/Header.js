import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Hjemmeside from '../sider/Hjemmeside.js';
import AnsateSide from '../sider/AnsateSide.js';
import ProduktSide from '../sider/ProduktSide.js';

function TopLinker() {
  return (
    <div className='header-teks'    >
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

            <div>
            <Link to="/ProduktSide">Produkt Side</Link>
            </div>
            <div>
            <Link to="/AnsateSide">Ansate Side</Link>
            </div>
            <div>
            <Link to="/Hjemmeside">Hjemmeside</Link>
            </div>
            

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Home</h1>} />
        <Route path="/AnsateSide" element={<AnsateSide />} />
        <Route path="/Hjemmeside" element={<Hjemmeside />} />
        <Route path="/ProduktSide" element={<ProduktSide />} />
      </Routes>
    </div>
  );
}

export default TopLinker;
