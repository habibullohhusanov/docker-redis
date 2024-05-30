const express = require("express");

const app = express();

app.get("/", async (req, res) => {
    return res.status(200).json({
        message: "working conatiner",
    });
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});