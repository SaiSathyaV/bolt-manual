// src/components/LoginActivity.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginActivity = () => {
  const [loginData, setLoginData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/login-activity') // Replace with your backend API URL
      .then(response => {
        setLoginData(response.data);
      })
      .catch(error => {
        console.error('Error fetching login activity:', error);
      });
  }, []);

  return (
    <div>
      <h2>Login Activity</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>User</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loginData.map((activity, index) => (
            <tr key={index}>
              <td>{activity.timestamp}</td>
              <td>{activity.user}</td>
              <td>{activity.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoginActivity;
