const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/hmtl");

  switch (req.url) {
    case "/": {
      fs.readFile("index.html", (err, data) => {
        if (err) throw err;
        res.writeHead(res.statusCode, { "Content-Type": "text/html" });
        res.write(data);
        return res.end;
      });
      break;
    }
    case "/about": {
      fs.readFile("about.html", (err, data) => {
        if (err) throw err;
        res.writeHead(res.statusCode, { "Content-Type": "text/html" });
        res.write(data);
        return res.end;
      });
      break;
    }
    case "/contact-me": {
      fs.readFile("contact-me.html", (err, data) => {
        if (err) throw err;
        res.writeHead(res.statusCode, { "Content-Type": "text/html" });
        res.write(data);
        return res.end;
      });
      break;
    }
    default: {
      fs.readFile("404.html", (err, data) => {
        if (err) throw err;
        res.writeHead(res.statusCode, { "Content-Type": "text/html" });
        res.write(data);
        return res.end;
      });
    }
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
