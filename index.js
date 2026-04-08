const express = require("express");
const app = express();

const port = 8080;

app.get("/", (req, res) => {
    res.send("Hey how are you ?");
});

app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
});