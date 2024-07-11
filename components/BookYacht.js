// components/BookYacht.js
import React, { useState } from 'react';

const BookYacht = () => {
  const [booking, setBooking] = useState({
    yachtId: '',
    dateRange: '',
    guests: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({
      ...booking,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(response => response.json())
      .then(data => {
        alert('Booking successful!');
        setBooking({
          yachtId: '',
          dateRange: '',
          guests: '',
          specialRequests: ''
        });
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Yacht</h2>
      <label>
        Yacht ID:
        <input type="text" name="yachtId" value={booking.yachtId} onChange={handleChange} required />
      </label>
      <label>
        Date Range:
        <input type="text" name="dateRange" value={booking.dateRange} onChange={handleChange} required />
      </label>
      <label>
        Guests:
        <input type="number" name="guests" value={booking.guests} onChange={handleChange} required />
      </label>
      <label>
        Special Requests:
        <textarea name="specialRequests" value={booking.specialRequests} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookYacht;
