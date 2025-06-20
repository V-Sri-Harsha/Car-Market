import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center' }}>
      <img src={car.imageUrl} alt={car.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
      <h3 style={{ margin: '5px 0' }}>{car.name}</h3>
      <p style={{ margin: '5px 0', color: '#555' }}>₹ {car.price.toLocaleString('en-IN')}</p>
      <Link to={`/car/${car._id}`}>
        <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer', borderRadius: '5px' }}>
          View Details
        </button>
      </Link>
    </div>
  );
};

export default CarCard;