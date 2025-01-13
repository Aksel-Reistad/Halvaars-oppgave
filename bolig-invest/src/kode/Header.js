import '../App.css';
import { Link } from 'react-router-dom';
import Skjema from './Skema';

function TopLinker({ onToggleForm }) {
  console.log("onToggleForm mottatt i TopLinker: ", onToggleForm);
  return (
    <div className="header-container">
      <div className="logo">Bolig Invest AS</div>
      <nav>
        <ul className="header-nav">
          <li>
            <Link to="/ProduktSide">Prosjekter</Link>
          </li>
          <li>
            <Link to="/Hjemmeside">Hjemmeside</Link>
          </li>
          <li>
            <Link to="/AnsateSide">AnsateSide</Link>
          </li>
          <li>
            <Skjema/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopLinker;
