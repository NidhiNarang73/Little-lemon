import '../Styles/Nav.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/booking">Reservations</Link>
      <Link to="/order-online">Order Online</Link>
      {/* other links as needed */}
    </nav>
  );
}

export default Nav;
