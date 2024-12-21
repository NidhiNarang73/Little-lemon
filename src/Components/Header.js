import '../Styles/Header.css'
import heroImage from '../Assets/restauranfood.jpg';


function Header() {
    return (
      <header className='header'>

      <div className='text-content'>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>Serving fresh and authentic Mediterranean cuisine.</p>
        <button onClick={() => console.log("Button clicked")}>Book a Table</button>
      </div>

      <div className='image-content'>
        <img src= {heroImage} alt="Little Lemon Food" />
      </div>

      </header>
    );
  }
  export default Header;