const fs = require("fs");
const contentToRender = '<h1>Hello World</h1>';
const http = require("http");

fs.writeFile("index.html",contentToRender, (err)=>{
    console.log(err);
});

const server = http.createServer((req, res)=>{
    fs.readFile("index.html", (err, data)=>{
        res.end(data);
    });
});

server.listen(3000, ()=>{
    console.log("Server is responding");
});