import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const YachtDetails = () => {
  const { id } = useParams();
  const [yacht, setYacht] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3002/yatchs/${id}`)
      .then(response => response.json())
      .then(data => setYacht(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!yacht) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{yacht.first_name}</h1>
      <img src={yacht.image} alt={yacht.first_name} />
      <p>{yacht.description}</p>
      <p>Price: {yacht.price}</p>
      <p>Amenities: {yacht.amenities.join(', ')}</p>
      <p>Capacity: {yacht.capacity}</p>
      <button>Book Now</button>
    </div>
  );
};

export default YachtDetails;
