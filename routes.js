const fs = require('fs');

const routeHandler = (req, res) => {
    console.log(req.url)
if(req.url == "/"){
    console.log("Hello India")
    res.setHeader("Content-type", "text/html");
    res.write('<html>')
    res.write("<body> <form method='POST' action='/message'><input type='text' name='data'><button type='submit'>Send</button></form></body>")
    res.write('</html>')
}
else if(req.url === "/message" && req.method === "POST"){
    const my_incoming_data = [];
    req.on('data', (packets)=> {
        // console.log(packets);
        my_incoming_data.push(packets);
    })
    req.on('end', ()=> {
        let parsedData = Buffer.concat(my_incoming_data);
        // console.log(parsedData);
        let mydata= parsedData.toString();
        console.log(mydata);
        let finalData = mydata.split("=")[1];
        // console.log("Final data is :- ", finalData);
        fs.readFile("message.txt",  'utf8', (err, data) =>{
            if (err) {
                console.error(err);
                return;
              }
            //   console.log("Data of file is:-",data);
            //   console.log("Data from input", finalData);
              let input_data = finalData.concat(`/n` ,data);
              fs.writeFileSync("message.txt", input_data);
        })
  
        
    })

   
   res.statusCode = 302;
   res.setHeader('Location', '/');
   return res.end();
}
res.end();

}


module.exports = {
    handler: routeHandler
}
