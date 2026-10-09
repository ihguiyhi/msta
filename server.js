const express = require("express");
const path = require("path");

const app = express();

app.get("*", (req, res) => {
  res.setHeader("Content-Type", "application/hta");
  res.sendFile(path.join(__dirname, "file.hta"));
});

const PORT = process.env.PORT || 3000;
