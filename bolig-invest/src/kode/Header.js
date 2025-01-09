import '../App.css';
import { Link } from 'react-router-dom';

function TopLinker() {
  return (
    <div className="header-container">
      <div className="logo">Bolig Invest AS</div>
      <nav>
        <ul className="header-nav">
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
    </div>
  );
}

export default TopLinker;
