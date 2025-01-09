import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Hjemmeside from '../sider/Hjemmeside.js';
import AnsateSide from '../sider/AnsateSide.js';
import ProduktSide from '../sider/ProduktSide.js';

function TopLinker() {
  return (
    <div className="header-container">
      <nav>
        <ul className="header-nav">
          <li>
            <Link to="/">Om oss</Link>
          </li>
          <li>
            <Link to="/ProduktSide">Prosjekter</Link>
          </li>
          <li>
            <Link to="/Hjemmeside">Hjemme side</Link>
          </li>
          <li>
            <Link to="/AnsateSide">AnsateSide</Link>
          </li>
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
