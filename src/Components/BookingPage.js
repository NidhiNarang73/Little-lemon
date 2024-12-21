// BookingPage.js
import { useState } from 'react';

function BookingPage() {
  // State variables to hold form input
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log('Booking Details:', {
      date,
      time,
      guests,
      occasion,
    });
    alert('Your table has been booked!');
  };

  return (
    <section >
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '0.5rem' }}>
        <label htmlFor="res-date">Choose Date:</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="res-time">Choose Time:</label>
        <input
          type="time"
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        <label htmlFor="occasion">Occasion (optional):</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">None</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>

        <button type="submit" style={{ marginTop: '1rem' }}>Book Now</button>
      </form>
    </section>
  );
}

export default BookingPage;
