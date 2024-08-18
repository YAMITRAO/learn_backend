const http = require('http');

const server = http.createServer(function(req, res){
    console.log(req.url)
    if(req.url == "/home"){
        console.log("Hello India")
        res.setHeader("Content-type", "text/html");
        res.write('<html>')
        res.write("<body> <div>Welcome Home</div></body>")
        res.write('</html>')
    }
    else if(req.url === "/about"){
        res.setHeader("Content-type", "text/html");
        res.write('<html>')
        res.write('<head><title>Document</title></head>')
        res.write("<body> <div>Welcome to about us page</div></body>")
        res.write('</html>')
    }
    else if(req.url === "/node"){
        res.setHeader("Content-type", "text/html");
        res.write('<html>')
        res.write("<body> <div>Welcome to my node js page</div></body>")
        res.write('</html>')
    }
    res.end();
})

server.listen(3000);