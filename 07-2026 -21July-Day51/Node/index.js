const http = require ('http')
const port = 3000;

const server = http.createServer((req , res)=>{
    res.setHeader("content-type","text/html");
    res.end("<h1>Hello From Node JS</h1>");
});
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})