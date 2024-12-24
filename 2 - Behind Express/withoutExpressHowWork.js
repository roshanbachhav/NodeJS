const serverHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html> <body> <nav> <ul> <li> <a href='/'>Home </a> </li> <li> <a href='/shop'> Shop </a> </li> <li> <a href='/form'> form </a> </li> </ul> </nav> <h1> This is home url </h1> </html>"
    );
    res.end();
  } else if (req.url == "/form") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html> <body> <nav> <ul> <li> <a href='/'>Home </a> </li> <li> <a href='/shop'> Shop </a> </li> <li> <a href='/form'> form </a> </li> </ul> </nav> <h1> This is shop url </h1> <form action='/submit-url' method='POST'> <label> Enter name </lable> <input type='text' name='name' /> <lable> Select Gender </lable> <input type='radio' value='Male' name='Gender' /> Male <input type='radio' value='Female' name='Gender' /> Female <br> <button type='submit'>Submit </button> </form> </html>"
    );
    res.end();
  } else if (req.url.toLowerCase() === "/submit-url" && req.method == "POST") {
    const storage = [];
    req.on("data", (chunk) => {
      storage.push(chunk); 
    });
    req.on("end", () => {
      const parsing = Buffer.concat(storage).toString(); 
      const ClearData = new URLSearchParams(parsing);
      const objectData = Object.fromEntries(ClearData); 
    });
    res.setHeader("Location", "/");
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html> <body> <nav> <ul> <li> <a href='/'>Home </a> </li> <li> <a href='/shop'> Shop </a> </li> <li> <a href='/form'> form </a> </li> </ul> </nav> <h1> This is home url </h1> </html>"
    );
    res.end();
  }
};

module.exports = serverHandler;
