// Main.js
import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';  // A separate component you might have
import OrderOnlinePage from './OrderOnlinePage';
import Header from './Header'
import '../Styles/Main.css'
import { Link } from 'react-router-dom';

// Images for “specials”
import greekSaladImg from '../Assets/greeksalad.jpg';
import bruchettaImg from '../Assets/bruchetta.svg';
import lemonDessertImg from '../Assets/lemondessert.jpg';

function Main() {
  return (
    <main>
      <Routes>
        {/* HOMEPAGE ROUTE */}
        <Route
          path="/"
          element={
            <>
            <Header />
              {/* Highlights Section */}
              <section aria-label="Weekly Specials">
                <h2>Weekly Specials</h2>
                <div className="highlights">
                  <article>
                    <img src={greekSaladImg} alt="Greek Salad" />
                    <h3>Greek Salad</h3>
                    <p>Yum yum healthy</p>
                    <p>Price: $10.99</p>
                  </article>
                  <article>
                    <img src={bruchettaImg} alt="Bruchetta" />
                    <h3>Bruchetta</h3>
                    <p>Delicious Italian Dish</p>
                    <p>Price: $12.99</p>
                  </article>
                  <article>
                    <img src={lemonDessertImg} alt="Lemon Dessert" />
                    <h3>Lemon Dessert</h3>
                    <p>Healthy dessert</p>
                    <p>Price: $8.99</p>
                  </article>
                </div>
                <Link to="/order-online" className="order-online-btn">Order Online</Link>
          
              </section>

              {/* Testimonials Section */}
              <section aria-label="Customer Testimonials">
                <h2>What Our Customers Say</h2>
                <article>
                  <p>"The food was fantastic! Highly recommend."</p>
                  <p>- John Doe</p>
                </article>
                <article>
                  <p>"A delightful dining experience with fresh flavors."</p>
                  <p>- Jane Smith</p>
                </article>
              </section>
            </>
          }
        />

        {/* BOOKING ROUTE */}
        <Route path="/booking" element={<BookingPage />} />

        {/*Order Online */}
        <Route path="/order-online" element={<OrderOnlinePage />} />

      </Routes>
    </main>
  );
}

export default Main;
