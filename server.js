const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const tasks = require("./routes/tasks");
const cors = require('cors');

let port = 3000;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api", tasks);

app.listen(port, () => {
    console.log("Server is running on port ", port);
})