const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

import shephData from "./routes/sheph-data";

app.use(cors());



app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.use("/server", shephData);
// app.post("/server/add", (req, res) => {
//     console.log(JSON.stringify(req.body));
//     res.status(200).json(req.body);
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Running on localhost:" + PORT);
});