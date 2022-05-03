const express = require("express");
const app = express();
const cors = require("cors")
const mysql = require('mysql')


app.use(cors());
app.use(express.json());

// connect to database
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'students'
})

app.post("/addstudent", (req, res) => {
    console.log(req.body)
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const schoolname = req.body.schoolname;
    const licence = req.body.licence;

    db.query("INSERT INTO students (firstname, lastname, username, schoolname, licence) VALUES (?,?,?,?,?)",
        [firstname, lastname, username, schoolname, licence], (err, result) => {
            if (err) {
                console.log('error', err)
            } else {
                res.send("Values Inserted");
            }
        }
    );
})

app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.delete("/api/delete/:firstname", (req, res) => {
    const firstname = req.params.firstname
    const sqlDelete =
        "DELETE FROM students WHERE firstname = ?";

    db.query(sqlDelete, firstname, (err, result) => {
        if (err) console.log(err)
    })
})

app.put("/api/update", (req, res) => {
    const id = req.body.id
    const licence = req.body.licence;
    const schoolname = req.body.schoolname
    const username = req.body.username

    db.query("UPDATE students SET licence = ?, schoolname = ?, username = ? WHERE firstname = ?", [licence, schoolname, username, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log('express server is running on port 3001');
});


