import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/Students.css'


function Students() {

    const [studentList, setStudentList] = useState([]);

    const [newLicence, setNewLicence] = useState("");
    const [newSchool, setNewSchool] = useState("");
    const [newUserName, setNewUserName] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/students').then((response) => {
            setStudentList(response.data)
        });
    }, [setStudentList])


    const deleteHandler = (name) => {
        axios.delete(`http://localhost:3001/api/delete/${name}`);
        console.log(`Report was deleted`);
    }


    const updateHandler = (id) => {
        axios.put("http://localhost:3001/api/update", { licence: newLicence, schoolname: newSchool, username: newUserName, id: id }).then(
            (response) => {
                setStudentList(
                    studentList.map((val) => {
                        console.log(val)
                        return val.id === id
                            ? {
                                firstname: val.firstname,
                                lastname: val.lastname,
                                username: newUserName,
                                schoolname: newSchool,
                                licence: newLicence,
                            }
                            : val;
                    })
                );
            }
        );
    };


    return <div>
        {studentList.map(student => {
            return (
                <div className="container" key={student._id}>
                    <table>
                        <tbody>
                            <tr>
                                <td>First name: {student.firstname} </td>
                            </tr>
                            <tr>
                                <td>Last name: {student.lastname} </td>
                            </tr>
                            <tr>
                                <td>Username: {student.username} </td>
                            </tr>
                            <tr>
                                <td>School name: {student.schoolname} </td>
                            </tr>
                            <tr>
                                <td>Licence: {student.licence} </td>
                            </tr>
                        </tbody>
                    </table>


                    <div>

                        <input type="text" onChange={(event) => { setNewLicence(event.target.value) }} className="form" placeholder="licence"></input>

                        <input type="text" onChange={(event) => { setNewUserName(event.target.value) }} className="form" placeholder="username"></input>

                        <input type="text" onChange={(event) => { setNewSchool(event.target.value) }} className="form" placeholder="school name"></input>

                        <button className="btn-delete"
                            onClick={() => deleteHandler(student.firstname)}>DELETE</button>

                        <button className="btn-update"
                            onClick={() => updateHandler(student.firstname)}>UPDATE</button>

                    </div>
                </div>
            )
        })}

    </div>
}

export default Students;
