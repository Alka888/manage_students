import React from "react";

function Home() {
    return <div className="container">
        <h1>Home Page</h1>
        <p>
            Small full stack application for spam protection team that consists of a server and a web based UI in order to manage reported content. Data pass between React UI and MongoDB Atlas. I build a simple app that will allow you to:
            <ul>
                <li> post data from React User Interface (Form) to MongoDB Atlas through Node/Express js </li>
                <li> get data from MongoDB Atlas to React User Interface through Node/Express js.</li>
                <li> delete/block data from MongoDB Atlas.</li>
                <li>put/update data in the input, which will update data in MongoDB.</li>
            </ul>

            I was using the following npm packages:
            - express
            - mongoose
            - cors
            - axios
            - bootstrap
            - react-router-dom
        </p>
    </div>
}

export default Home;