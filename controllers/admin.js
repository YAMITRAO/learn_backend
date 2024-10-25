const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // req.user.createProduct
 
  Product.create({
    title:title,
    imageUrl: imageUrl,
    price:price,
    description: description,
    userId: req.user.id
  }).then((res)=> {
    console.log("Result ", res);
    res.redirect('/admin/products')
  })
  .catch((e)=>{
    console.log("Error is", e);
    res.redirect('/admin/products')
  } 
)
  // res.redirect('/admin/products');
};

exports.getEditProduct = async (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  const result = await Product.findByPk(prodId);
  console.log("At edit admin result is:-", result.dataValues);
  res.render('admin/edit-product', {
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
    editing: editMode,
    product: result
  });
};

exports.postEditProduct = async (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
   let result = await Product.findByPk(prodId)
   result.title = updatedTitle;
   result.price = updatedPrice;
   result.imageUrl = updatedImageUrl;
   result.description = updatedDesc;
   await result.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {

  Product.findAll().then((product)=> {

    res.render('admin/products', {
      prods: product,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch((e)=> console.log(e))
 
};

exports.postDeleteProduct = async (req, res, next) => {
  const prodId = req.body.productId;
  const result = await Product.findByPk(prodId);
  console.log("At edit admin result is:-", result.dataValues); 
   await result.destroy()
  res.redirect('/admin/products');
};
