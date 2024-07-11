import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/manage-bookings">Manage Bookings</Link>
        </li>
        {loggedIn ? (
          <>
            <li>
              <Link to="/book-yacht">Book Yacht</Link>
            </li>
            <li>
              <Link to="#" onClick={handleLogout}>Logout</Link>
            </li>
          </>
          
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
          
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
