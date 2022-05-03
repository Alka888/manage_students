import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AddStudent from './components/AddStudent';
import Students from './components/Students';

function App() {

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Welcome to React App</h2>
      <Router >
        <Navbar />
        <Route path="/addstudent">
          <AddStudent />
        </Route>
        <Route path="/students">
          <Students />
        </Route>
      </Router>
    </div>
  );
}

export default App;
