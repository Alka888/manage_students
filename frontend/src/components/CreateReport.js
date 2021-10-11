import React, { useState } from "react";
import axios from "axios";
import './styles/CreateReport.css'

function CreateReport() {

    const [input, setInput] = useState({
        _id: '',
        state: '',
        reportType: '',
        message: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newRep = {
            id: input._id,
            state: input.state,
            reportType: input.reportType,
            message: input.message
        }

        axios.post('http://localhost:3001/reports', newRep);
        alert('Report been created')
        console.log('Report been created');
    }

    return <div className="container">
        <h2>Create report</h2>
        <form>

            <div className="form-group">
                <input onChange={handleChange} name="_id" value={input._id} className="form-control" placeholder="id"></input>
            </div>
            <div className="form-group">
                <input onChange={handleChange} name="state" value={input.state} className="form-control" placeholder="state"></input>
            </div>

            <div className="form-group">
                <input onChange={handleChange} name="reportType" value={input.reportType} className="form-control" placeholder="type"></input>
            </div>

            <div className="form-group">
                <textarea onChange={handleChange} name="message" value={input.message} className="form-control" placeholder="message"></textarea>
            </div>

            <button onClick={handleClick} className="btn btn-lg btn-info">Add report</button>
        </form>
    </div>
}

export default CreateReport;