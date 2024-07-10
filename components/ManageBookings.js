// components/ManageBookings.js
import React, { useState, useEffect } from 'react';

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/bookings')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleEdit = (bookingId) => {
    console.log('Editing booking:', bookingId);
    // Handle edit logic here
  };

  const handleDelete = (bookingId) => {
    fetch(`http://localhost:3002/bookings/${bookingId}`, {
      method: 'DELETE'
    })
      .then(() => setBookings(bookings.filter(booking => booking.id !== bookingId)))
      .catch(error => console.error('Error deleting booking:', error));
  };

  return (
    <div>
      <h2>Manage Bookings</h2>
      <div className="booking-list">
        {bookings.map(booking => (
          <div key={booking.id} className="booking-item">
            <p>Yacht ID: {booking.yachtId}</p>
            <p>Date Range: {booking.dateRange}</p>
            <p>Guests: {booking.guests}</p>
            <p>Special Requests: {booking.specialRequests}</p>
            <button onClick={() => handleEdit(booking.id)}>Edit</button>
            <button onClick={() => handleDelete(booking.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBookings;
