import React from "react";
import {Link} from "react-router-dom";
import "./styles/Navbar.css"

function Navbar() {
    return <nav className="navbar bg-dark container">
        <h4><Link className="link" to="/">Home</Link></h4>
        <h4><Link className="link" to="/reports">Create Report</Link></h4>
        <h4><Link className="link" to="/reportdashboard">Report Dashboard</Link></h4>
    </nav>
}

export default Navbar;