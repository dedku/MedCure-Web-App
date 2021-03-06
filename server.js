const express = require("express");
const path = require("path");

const app = express();

// Middleware for JS files
// Extension added
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static"), {extensions: ["js"]}))

// Router index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
})

app.listen(process.env.PORT || 8060, () => console.log ("Server running...") )