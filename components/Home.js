import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ yachts }) => {
  return (
    <div className="home-container">
      <h1>Explore Our Luxury Yachts</h1>
      <div className="yachts-grid">
        {yachts.map(yacht => (
          <div key={yacht.id} className="yacht-card">
            <img src={yacht.image} alt={yacht.first_name} />
            <div className="yacht-details">
              <h2>{yacht.first_name}</h2>
              <p className="yacht-price">{yacht.price}</p>
              <p className="yacht-description">{yacht.description}</p>
              <div className="yacht-amenities">
                <p><strong>Amenities:</strong></p>
                <ul>
                  {yacht.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <Link to={`/yacht/${yacht.id}`} className="btn">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;