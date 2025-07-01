const express = require("express");
const app = express();
const path = require("path");

// Configuration
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.send('Server is running');
    res.sendFile(__dirname, "index.html", "public");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('Listening on port 3000');
});