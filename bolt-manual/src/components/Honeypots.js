// src/components/Honeypots.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Honeypots = () => {
  const [honeypots, setHoneypots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/honeypots') // Replace with your backend API URL
      .then(response => {
        setHoneypots(response.data);
      })
      .catch(error => {
        console.error('Error fetching honeypots:', error);
      });
  }, []);

  return (
    <div>
      <h2>Honeypots</h2>
      <table>
        <thead>
          <tr>
            <th>Honeypot Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {honeypots.map((honeypot, index) => (
            <tr key={index}>
              <td>{honeypot.honeypot_name}</td>
              <td>{honeypot.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Honeypots;
