const express = require('express');
const bodyParser = require('body-parser')

let app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use("/add-product", (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="product-name" ><input type="text" name="size"><button type="submit">Add</button></form>')
})

app.post('/product', (req,res, next)=>{
    console.log(req.body);
    // res.send('<div>Product added successfully </div>');
    res.redirect("/")

})

app.use("/",(req,res, next)=> {
    console.log("Root based system!...")
    res.send('<div>Home Page</div>')
})

app.listen(3000);