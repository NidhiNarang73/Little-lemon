import '../Styles/Header.css'
import heroImage from '../Assets/restauranfood.jpg';
import { Link } from 'react-router-dom';



function Header() {
    return (
      <header className='header'>

      <div className='text-content'>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>Serving fresh and authentic Mediterranean cuisine.</p>
        
        <Link to="/booking" className="cta-button">
          Book a Table
        </Link>


      </div>

      <div className='image-content'>
        <img src= {heroImage} alt="Little Lemon Food" />
      </div>

      </header>
    );
  }
  export default Header;