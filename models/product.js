
const Cart = require('./cart');
const db = require('../util/database')

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   return db.execute('INSERT INTO products (id, title, price, description, imageUrl) VALUES (?,?,?,?,?)', [
    1024*Math.random().toFixed(2)*10, this.title, this.price, this.description, this.imageUrl
    ])
   
  }

  static deleteById(id) {
   
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
   
  }
};
