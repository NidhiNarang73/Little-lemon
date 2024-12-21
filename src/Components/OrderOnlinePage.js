// OrderOnlinePage.js
import { useState } from 'react';
import '../Styles/Main.css'


function OrderOnlinePage() {
  // Suppose we have some menu data:
  const initialMenu = [
    { id: 1, name: 'Greek Salad', price: 10.99 },
    { id: 2, name: 'Bruschetta', price: 12.99 },
    { id: 3, name: 'Lemon Dessert', price: 8.99 },
  ];

  // We'll store the quantity for each dish in an array or object
  // For example: { [dishID]: quantity }
  const [quantities, setQuantities] = useState({});

  // Helper to get quantity for a dishID (default 0 if not found)
  const getQuantity = (dishID) => quantities[dishID] || 0;

  // When user changes quantity
  const handleQuantityChange = (dishID, newQty) => {
    // Convert string from <input> to a number
    const numericQty = parseInt(newQty, 10) || 0;
    setQuantities((prev) => ({
      ...prev,
      [dishID]: numericQty,
    }));
  };

  // Compute total cost
  const totalPrice = initialMenu.reduce((acc, dish) => {
    const qty = getQuantity(dish.id);
    return acc + dish.price * qty;
  }, 0);

  // For the "Place Order" flow
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // In a real app, you'd send to a backend, etc.
    // Here, just set a flag to show success message
    setOrderPlaced(true);
  };

  return (
    <section className="order-page-container">
      <h2>Order Online</h2>

      {orderPlaced ? (
        <div className="order-confirmation">
          <h3>Your order is placed successfully!</h3>
          <p>We’ll start preparing your delicious meal right away.</p>
        </div>
      ) : (
        <>
          <ul className="menu-list">
            {initialMenu.map((dish) => (
              <li key={dish.id} className="menu-item">
                <span className="menu-item-name">{dish.name}</span>
                <span className="menu-item-price">${dish.price.toFixed(2)}</span>
                <label className="menu-item-qty">
                  Qty:
                  <input
                    type="number"
                    min="0"
                    value={getQuantity(dish.id)}
                    onChange={(e) => handleQuantityChange(dish.id, e.target.value)}
                  />
                </label>
              </li>
            ))}
          </ul>

          <div className="order-summary">
            <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
            <button onClick={handlePlaceOrder} className="place-order-btn">
              Place Order
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default OrderOnlinePage;

