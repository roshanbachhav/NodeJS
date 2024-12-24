const http = require("http");
const serverHandler = require("./withoutExpressHowWork");

const server = http.createServer(serverHandler);

server.listen(3000, () => {
  console.log("Node js Practice. Live in port : 3000");
});
