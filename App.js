// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import YachtDetails from './components/YachtDetails';
import BookYacht from './components/BookYacht';
import ManageBookings from './components/ManageBookings';
import Login from './components/Login';
import './App.css';

function App() {
  const [yachts, setYachts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/yatchs")
      .then(response => response.json())
      .then(data => setYachts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route
            path="/"
            element={loggedIn ? <Home yachts={yachts} /> : <Navigate to="/login" />}
          />
          <Route
            path="/yacht/:id"
            element={loggedIn ? <YachtDetails /> : <Navigate to="/login" />}
          />
          <Route
            path="/book-yacht"
            element={loggedIn ? <BookYacht /> : <Navigate to="/login" />}
          />
          <Route
            path="/manage-bookings"
            element={loggedIn ? <ManageBookings /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
