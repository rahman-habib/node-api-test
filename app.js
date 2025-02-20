const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const axios = require("axios");

const port = process.env.PORT || 9010;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to NodeJs API Project");
});

app.get("/hello", (req, res) => {
    res.send("Hello World! I am here");
});

app.get("/get", async (req, res) => {  
    
    try {
        let response = await axios.get("https://baconipsum.com/api/?type=meat-and-filler");
        res.json(response.data); // Send API response to the client
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => console.log(`Server is started and running on port ${port}`));
