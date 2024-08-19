const http = require('http');

const reListner = (req, res) => {
    console.log(req.url);
    res.write('<div>Hello India</div>')
}

let server = http.createServer(reListner);
server.listen(3000);
