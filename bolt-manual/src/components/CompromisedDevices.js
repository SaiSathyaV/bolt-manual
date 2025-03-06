// src/components/CompromisedDevices.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompromisedDevices = () => {
  const [compromisedDevices, setCompromisedDevices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/compromised-devices') // Replace with your backend API URL
      .then(response => {
        setCompromisedDevices(response.data);
      })
      .catch(error => {
        console.error('Error fetching compromised devices:', error);
      });
  }, []);

  return (
    <div>
      <h2>Compromised Devices</h2>
      <table>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>IP Address</th>
            <th>Compromise Status</th>
          </tr>
        </thead>
        <tbody>
          {compromisedDevices.map((device, index) => (
            <tr key={index}>
              <td>{device.device_name}</td>
              <td>{device.ip_address}</td>
              <td>{device.compromise_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompromisedDevices;
