const http = require("http");

const Server = http.createServer((req, res) => { 
});

Server.listen(3000, () => {
  console.log(`Server start at port : 3000`);
});
