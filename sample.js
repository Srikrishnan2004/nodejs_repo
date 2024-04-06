const http=require('http')
const {readFileSync} =require('fs');
const file=readFileSync('./index.html');
const cssfile=readFileSync('./index.css');
const server=http.createServer((req,res) =>{
    console.log(req.url);
    if(req.url==='/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write(file);
        res.end("user hit the server");
    }
    else if(req.url==='/index.css')
    {
        res.writeHead(200,{'content-type':'text/css'});
        res.write(cssfile);
        res.end("user hit the server");
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>Error Page</h1>');
        res.end("user didn't get the server");
    }
});

server.listen(5000);