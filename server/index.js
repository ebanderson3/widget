const express = require("express");
const users = require("../users.json");
const app = express();
const PORT = 3001;
app.get("/", (req, res) => {
  return res.sendFile("$(__dirname)/../src/App.js");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
