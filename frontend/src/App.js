import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateReport from './components/CreateReport';
import ReportDashboard from './components/ReportDashboard';

function App() {

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Welcome to React App</h2>
      <Router >
        <Navbar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/reports">
          <CreateReport />
        </Route>
        <Route path="/reportdashboard">
          <ReportDashboard />
        </Route>
      </Router>
    </div>
  );
}

export default App;
