require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.set("json spaces", 2);
app.use(cors());
app.use(express.static("public"));

//middleware
app.use("/api", require("./src/routes"));

//routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


mongoose.connect(process.env.URL)
    .then(() => {
        console.log("🟢 DB Connected");
        app.listen({ port: port }, () => {
            console.log(`🚗 Server running on port ${port}`);
        });
    })
    .catch((err) => {
        console.log("🔴 There was an error on the DB connection method.");
        console.log(err);
    });
