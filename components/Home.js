import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ yachts }) => {
  return (
    <div>

      <h1>Yachts Available</h1>
      <div className="yacht-list">
        {yachts.length > 0 ? (
          yachts.map((yacht) => (
            <div key={yacht.id} className="yacht-item">
              <h2>{yacht.first_name}</h2>
              <img src={yacht.image} alt={yacht.first_name} />
              <p>{yacht.description}</p>
              <p>Price: {yacht.price}</p>
              <p>Capacity: {yacht.capacity}</p>
              <Link to={`/yacht/${yacht.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No yachts available</p>
        )}
      </div>
    </div>
  );
};

export default Home;


