// BookingPage.js
import { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './apiFunctions';

function BookingPage() {
  // State variables to hold form input
  const [date, setDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  useEffect(() => {
    const today = new Date();
    setDate(today.toISOString().split('T')[0]); // e.g. "2024-01-02"

    const timesForToday = fetchAPI(today);
    setAvailableTimes(timesForToday);
  }, []);

  useEffect(() => {
    if (!date) return; // If date is empty, skip
    const newDate = new Date(date);
    const newTimes = fetchAPI(newDate);
    setAvailableTimes(newTimes);

    // Clear selected time if not in the new list, optional:
    if (!newTimes.includes(time)) {
      setTime('');
    }
  }, [date]); // triggers when 'date' changes

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    const success = submitAPI(formData);
    if (success) {
      alert('Your table has been booked!');
      // Reset form or navigate away
    } else {
      alert('Error: Could not submit booking.');
    }

    console.log('Booking Details:', formData);
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
