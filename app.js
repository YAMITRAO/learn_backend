const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const sequelizedb = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

const errorController = require("./controllers/error");
const PORT = 3005;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(async (req, res, next)=> {

    let result =  await User.findByPk(1)
    req.user =  result.dataValues

        console.log("theeeee middle ware user id is :-------",  result)
   next()
})


app.use("/admin", adminRoutes);
app.use(shopRoutes);



app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: "CASCADE"});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem});
Product.belongsToMany(Cart,  { through: CartItem});

sequelizedb.sync({force: true}).then(()=>{
    return User.findByPk(1)
}).then((user)=> {
    if(!user){
        return User.create({name: "Test", email:"test@gmail.com"})
    }
    return user;
}).then((user)=>{
    console.log(user);
    app.listen(PORT, ()=> {
        console.log("sERVER IS RUNNING AT", PORT)
    });
})
.catch((e)=> console.log("error is", e))


