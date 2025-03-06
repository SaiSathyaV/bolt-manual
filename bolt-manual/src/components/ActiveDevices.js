// src/components/ActiveDevices.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActiveDevices = () => {
  const [activeDevices, setActiveDevices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/active-devices') // Replace with your backend API URL
      .then(response => {
        setActiveDevices(response.data);
      })
      .catch(error => {
        console.error('Error fetching active devices:', error);
      });
  }, []);

  return (
    <div>
      <h2>Active Devices</h2>
      <table>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>IP Address</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {activeDevices.map((device, index) => (
            <tr key={index}>
              <td>{device.device_name}</td>
              <td>{device.ip_address}</td>
              <td>{device.last_seen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveDevices;
