import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FoodOrder() {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const token = localStorage.getItem('token',response.data.token); 
        if (!token) {
          throw new Error('No token found.');
        }

        const response = await axios.get('http://localhost:8001/api/view/menu', {
          withCredentials: true 
        });
        setMenu(response.data);
      } catch (err) {
        console.error('Error fetching menu:', err.response || err.message || err); 
        setError(err.response?.data?.error || 'An error occurred. Please try again.');
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="container mt-4">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {menu.length > 0 ? (
          menu.map((item, index) => (
            <div key={index} className="col">
              <div className="card shadow-sm">
                {item.imageUrl && (
                  <img src={item.imageUrl} className="bd-placeholder-img card-img-top" width="100%" height="225" alt={item.name} />
                )}
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                  <p className="card-text"><strong>Category:</strong> {item.category}</p>
                  <p className="card-text"><strong>Available:</strong> {item.available ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          !error && <div className="text-center">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default FoodOrder;
