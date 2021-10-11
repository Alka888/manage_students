const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect("mongodb+srv://alena1990:Alka1990@cluster0.cxb5s.mongodb.net/reports",)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/", require("./routes/handles"));

app.listen(3001, () => {
    console.log('express server is running on port 3001');
});


