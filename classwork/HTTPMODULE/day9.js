// import http from http;
// const server=http.createServer((req,res)=>{
//     res.setHeader("content-type","text-html");
//     res.end('response from server end');
// })
// server.listen(PORT,HOST,()=>{
//     const PORT=process.env.PORT || 8000;
//     const HOST=process.env.HOST || 'localhost';
//     console.log("server is runing on port https:/localhost:800");
// })
//create your own server using http module
import http from "http";
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"context-html": "text/html"});
    res.write("<h1>hello world</h1>")
    res.write("hello world");
  res.end();
})
server.listen(3000,()=>{
    console.log("server is running on port");
})
    
//  import http from "http";
// import fs from "fs/promises";

// const fileName = "student.txt";

// const server = http.createServer(async (req, res) => {

//     if (req.url === "/create") {
//         try {
//             await fs.writeFile(
//                 fileName,
//                 "Name: pratyush\nCourse: B.Tech CSE-25",
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
//     }  if(req.url=="/append") {
//         try {
//             await fs.appendFile(fileName,"Name:rohit mishra\nCourse: B.Tech CSE-25");
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("<h1>File updated successfully</h1>");
//             res.end();
//         } catch (error) {
//             res.writeHead(500, { "Content-Type": "text/html" });
//             res.write("<h1>Error creating file</h1>");
//             res.end();
//         }
       
//     }
//     if(req.url=="/update") {
//         try {
//             await fs.writeFile(fileName,"Name:rohit mishra\nCourse: B.Tech CSE-25");
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("<h1>File updated successfully</h1>");
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
//     console.log(`http://localhost:3000`)
// });

// import http from "http";
// import fs from "fs/promises";
// const filename="student.txt";

// const server= http.createServer((req,res)=>{

// res.writeHead(200,{"context-html": text/html});
// res.write(<h1> hello world</h1>);
// console.log("hello world");
// res.end();
// })
// Server.listen(2000,()=>{
//     console.log("server is on the port");
    
// })
 
 

