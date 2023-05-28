const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./assets"));

// setup the index.html file.
app.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.send(path.resolve(__dirname, "./assets/index.html"));
  res.end();
});

// setup the error.html file for endpoints the are not available in the server.
app.all("*", (req, res) => {
  res.writeHead(404, { "content-type": "text/html" });
  res.send(path.resolve(__dirname, "./assets/notfound.html"));
  res.end();
});

// server listening to event on port
const port = app.listen(5000, () => {
  console.log(`Server is listening on port ${port.address().port}...`);
});
