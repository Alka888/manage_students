import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/ReportDashboard.css'


function ReportDashboard() {
    const [reps, setReps] = useState([{
        _id: '',
        state: '',
        reportType: '',
        message: ''
    }])

    const [updatedRep, setUpdatedRep] = useState({
        _id: '',
        state: '',
        reportType: '',
        message: ''
    })


    useEffect(() => {
        fetch("/reportdashboard")
            .then(res => {
                return res.json()

            }).then(jsonRes =>
                setReps(jsonRes));

    })

    function deleteHandler(id) {
        axios.delete('/delete/' + id);
        alert("report is blocked and deleted");
        console.log(`Report with id ${id} deleted`);
    }


    function updateHandler(id) {
        axios.put('/put/' + id, updatedRep);
        alert('Report updated');
        console.log(`Report with id ${id} updated`);
    };

    function handleUpdate(event) {
        const { name, value } = event.target;
        setUpdatedRep(prevInput => {
            return (
                {
                    ...prevInput,
                    [name]: value
                }
            );
        });
        console.log(updatedRep);
    }

    return <div>
        {reps.map(rep => {
            return (
                <div className="container" key={rep._id}>

                    <h2>Report</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID: {rep._id} </td>
                            </tr>
                            <tr>
                                <td>State: {rep.state} </td>
                            </tr>
                            <tr>
                                <td>Type: {rep.reportType} </td>
                            </tr>
                            <tr>
                                <td>Message: {rep.message} </td>
                            </tr>
                        </tbody>
                    </table>

                    <button style={{
                        position: "absolute", right: "30px", top: "40px",
                        width: "10%"
                    }}
                        onClick={() => deleteHandler(rep._id)}>BLOCK</button>

                    <button style={{
                        position: "absolute", right: "30px", top: "90px", width: "10%"
                    }}
                        onClick={() => updateHandler(updatedRep._id)}>RESOLVE</button>

                    <hr />

                    <div className="repsInput">

                        <input onChange={handleUpdate} name="_id" value={updatedRep._id} placeholder="id"></input>

                        <input onChange={handleUpdate} name="state" value={updatedRep.state} placeholder="state"></input>

                        <input onChange={handleUpdate} name="reportType" value={updatedRep.reportType} placeholder="type"></input>

                        <input onChange={handleUpdate} name="message" value={updatedRep.message} placeholder="message"></input>

                    </div>
                </div>
            )
        })}

    </div>
}

export default ReportDashboard;
