import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = () => {
  const [userCount, setUserCount] = useState(0);
  const [shopCount, setShopCount] = useState(0);

  useEffect(() => {
    fetchUserCount();
    fetchShopCount();
  }, []);

  const fetchUserCount = () => {
    axios.get('http://127.0.0.1:8000/api/get-user')
      .then(response => {
        setUserCount(response.data.length);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchShopCount = () => {
    axios.get('http://localhost:8000/api/get-shopActive')
      .then(response => {
        setShopCount(response.data.length);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="statistics-container">
      <div className="statistics-item">
        <h2>Total Users</h2>
        <p>{userCount}</p>
      </div>
      <div className="statistics-item">
        <h2>Total Shops</h2>
        <p>{shopCount}</p>
      </div>
    </div>
  );
};

export default Statistics;
