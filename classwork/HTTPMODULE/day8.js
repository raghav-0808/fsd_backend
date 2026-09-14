//create your own server using http module
import http from "http";
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"context-html": " text/html"});
    res.write("<h1>hello world</h1>")
    res.write("hello world");
  res.end();
})
server.listen(3000,()=>{
    console.log("server is running on port");
    
// import http from "httpmodules";
// import fs from "fs/promises";

// const fileName = "student.txt";

// const server = http.createServer(async (req, res) => {

//     if (req.url === "/create") {
//         try {
//             await fs.writeFile(
//                 fileName,
//                 "Name: Rohit\nCourse: B.Tech CSE-25",
//                 "utf8"
//             );

//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("<h1>File created successfully</h1>");
//             res.end();

//         } catch (error) {
//             res.writeHead(500, { "Content-Type": "text/html" });
//             res.write("<h1>Error creating file</h1>");
//             res.end();
//         }
//     }

// });

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });