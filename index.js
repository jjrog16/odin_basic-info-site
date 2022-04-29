const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/hmtl");
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
