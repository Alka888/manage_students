import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"

function Navbar() {
    return <nav className="navbar bg-dark container">
        <h4><Link className="link" to="/addstudent">Add Student</Link></h4>
        <h4><Link className="link" to="/students">Students</Link></h4>
    </nav>
}

export default Navbar;