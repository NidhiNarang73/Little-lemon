function Header() {
    return (
      <header>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>Serving fresh and authentic Mediterranean cuisine.</p>
        <button onClick={() => navigateTo('/reservations')}>Book a Table</button>
      </header>
    );
  }
  export default Header;