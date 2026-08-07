const express = require("express");
const cors = require("cors");
const databaseConnection = require("./database");
const router = require("./Route/bookRoute");
const app = express();

app.use(cors());
app.use(express.json());

databaseConnection();
app.use("/book", router);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

