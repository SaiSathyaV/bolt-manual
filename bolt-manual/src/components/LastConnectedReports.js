// src/components/LastConnectedReports.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LastConnectedReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/last-connected-reports') // Replace with your backend API URL
      .then(response => {
        setReports(response.data);
      })
      .catch(error => {
        console.error('Error fetching last connected reports:', error);
      });
  }, []);

  return (
    <div>
      <h2>Last Connected Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>IP Address</th>
            <th>Last Connected</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.device_name}</td>
              <td>{report.ip_address}</td>
              <td>{report.last_connected}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LastConnectedReports;
