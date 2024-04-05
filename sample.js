const http =require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("Welcome to our home page");
        console.log("Hello World");
    }
   if(req.url==='/about')
   {
    res.end("Hello World");
   }
});

server.listen(5000);