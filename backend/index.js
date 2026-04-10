const express = require("express");
const app = express();

const port = 8080;

app.get("/", (req, res) => {
    res.send("Hey how are you ?");
});

app.get("/name", (req, res) => {
    res.send("Hey what's your name .. never mind you are a fucking cunt!!");
})

app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
});