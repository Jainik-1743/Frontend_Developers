const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      name: "Jainik Peru",
      age: 30,
    },
    {
      name: "Jane Doe",
      age: 25,
    },
    {
      name: "Bob Smith",
      age: 40,
    },
    {
      name: "Alice Johnson",
      age: 35,
    },
  ]);
});

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});

module.exports = app;
