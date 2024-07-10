import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ yachts }) => {
  return (
    <div>
      <h1>Available Yachts</h1>
      <div className="yacht-list">
        {yachts.map(yacht => (
          <div key={yacht.id} className="yacht-item">
            <img src={yacht.image} alt={yacht.first_name} />
            <h2>{yacht.first_name}</h2>
            <p>{yacht.description}</p>
            <p>Price: {yacht.price}</p>
            <Link to={`/yacht/${yacht.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
