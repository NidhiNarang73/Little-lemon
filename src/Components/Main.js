import '../Styles/Main.css'
import greekSaladImg from '../Assets/greeksalad.jpg';
import bruchettaImg from '../Assets/bruchetta.svg';
import lemonDessertImg from '../Assets/lemondessert.jpg';



function Main() {
    return (
      <main>
        {/* Highlights Section */}
        <section aria-label="Weekly Specials">
          <h2>Weekly Specials</h2>
          <div className="highlights">
            <article>
              <img src= {greekSaladImg} alt="Greek Salad" />
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
            <img src = {lemonDessertImg} />
            <h3>Lemon Dessert</h3>
            <p>Healthy dessert</p>
            <p>Price: $8.99</p>
            </article>
          </div>
          <button onClick={() => console.log("Button clicked")}>Order Online</button>
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
      </main>
    );
  }
  export default Main;