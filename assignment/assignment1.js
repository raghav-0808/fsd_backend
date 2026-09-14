const http = require("http");
const fs = require("fs");

let file = "students.json";
if (!fs.existsSync(file)) fs.writeFileSync(file, "[]");

let form = `
<html>
<body>
  <h2>Student Form</h2>
  <form method="POST" action="/add">
    Name:<input name="name"><br>
    Roll:<input name="roll"><br>
    Course:<input name="course"><br>
    Email:<input name="email"><br>
    <button>Add</button>
  </form>
</body>
</html>
`;

let server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end(form);

  } else if (req.url === "/add" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      let p = new URLSearchParams(body);
      let s = {
        name: p.get("name"),
        roll: p.get("roll"),
        course: p.get("course"),
        email: p.get("email")
      };
      let arr = JSON.parse(fs.readFileSync(file));
      arr.push(s);
      fs.writeFileSync(file, JSON.stringify(arr));

      res.writeHead(200, { "Content-Type ": "text/html" });
      res.end(`
        <h2>Student added successfully!</h2>
        <p><b>Name:</b> ${s.name}</p>
        <p><b>Roll:</b> ${s.roll}</p>
        <p><b>Course:</b> ${s.course}</p>
        <p><b>Email:</b> ${s.email}</p>
        <a href='/'>Go Back</a>
      `);
    });

  } else if (req.url === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(fs.readFileSync(file));

  } else {
    res.end("404");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
