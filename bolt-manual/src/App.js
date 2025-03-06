import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginActivity from './components/LoginActivity';
import ActiveDevices from './components/ActiveDevices';
import Honeypots from './components/Honeypots';
import CompromisedDevices from './components/CompromisedDevices';
import SuricataRules from './components/SuricataRules';
import LastConnectedReports from './components/LastConnectedReports';

function App() {
  return (
    <Router>
      <div>
        <h1>Cybersecurity Dashboard</h1>
        <nav>
          <ul>
            <li><a href="/">Login Activity</a></li>
            <li><a href="/active-devices">Active Devices</a></li>
            <li><a href="/honeypots">Honeypots</a></li>
            <li><a href="/compromised-devices">Compromised Devices</a></li>
            <li><a href="/suricata-rules">Suricata Rules</a></li>
            <li><a href="/last-connected-reports">Last Connected Reports</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LoginActivity />} />
          <Route path="/active-devices" element={<ActiveDevices />} />
          <Route path="/honeypots" element={<Honeypots />} />
          <Route path="/compromised-devices" element={<CompromisedDevices />} />
          <Route path="/suricata-rules" element={<SuricataRules />} />
          <Route path="/last-connected-reports" element={<LastConnectedReports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
