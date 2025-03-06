// src/components/SuricataRules.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuricataRules = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/suricata-rules') // Replace with your backend API URL
      .then(response => {
        setRules(response.data);
      })
      .catch(error => {
        console.error('Error fetching Suricata rules:', error);
      });
  }, []);

  return (
    <div>
      <h2>Suricata Rules</h2>
      <table>
        <thead>
          <tr>
            <th>Rule ID</th>
            <th>Rule Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule, index) => (
            <tr key={index}>
              <td>{rule.rule_id}</td>
              <td>{rule.rule_description}</td>
              <td>{rule.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuricataRules;
