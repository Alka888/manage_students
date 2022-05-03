import React, { useState } from "react";
import axios from "axios";
import './styles/AddStudent.css'

function AddStudent() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [schoolname, setSchoolname] = useState("");
    const [licence, setLicence] = useState("");


    const addStudent = (event) => {
        axios.post('http://localhost:3001/addstudent', {
            firstname: firstname,
            lastname: lastname,
            username: username,
            schoolname: schoolname,
            licence: licence,
        }).then(() => {
            console.log("success")
        });
    }

    return <div className="container">
        <h2>Add Student</h2>

        <form>
            <div className="form-group">
                <input type="text"
                    onChange={(event) => {
                        setFirstname(event.target.value);
                    }} className="form-control" placeholder="first name"></input>
            </div>

            <div className="form-group">
                <input type="text"
                    onChange={(event) => {
                        setLastname(event.target.value);
                    }} className="form-control" placeholder="last name"></input>
            </div>

            <div className="form-group">
                <input type="text"
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }} className="form-control" placeholder="username"></input>
            </div>

            <div className="form-group">
                <input type="text"
                    onChange={(event) => {
                        setSchoolname(event.target.value);
                    }} className="form-control" placeholder="school name"></input>
            </div>
            <div className="form-group">
                <input type="text"
                    onChange={(event) => {
                        setLicence(event.target.value);
                    }} className="form-control" placeholder="licence"></input>
            </div>
            <button onClick={addStudent} className="btn btn-lg btn-info">Add student</button>
        </form>

    </div>
}

export default AddStudent;