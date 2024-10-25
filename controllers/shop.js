const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {

  Product.findAll().then((product)=> {
    res.render('shop/product-list', {
      prods: product,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch((e)=> console.log(e))
 
};

exports.getProduct = async (req, res, next) => {
  const prodId = req.params.productId;
  console.log("ProdId", prodId);
  // let result = await Product.findByPk(prodId);
  // console.log("REsult is :-", result.dataValues);

  Product.findByPk(prodId).then((product)=>{
    let myData = product.dataValues
    console.log("fffff", myData)
    res.render('shop/product-detail', {
      product: myData,
      pageTitle: myData.title,
      path: '/products'
    });
  }).catch((e)=> console.log(e))
 
};

exports.getIndex = (req, res, next) => {

  Product.findAll().then((product)=> {
    res.render('shop/index', {
      prods: product,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch((e)=> console.log(e))
 
 
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {

    
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
