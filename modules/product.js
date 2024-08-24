// let products = [];
let rootDir = require("../util/path");
const path = require("path");
const fs = require("fs");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

module.exports = class Product {
  constructor(product) {
    this.title = product;
  }

  save() {
    // products.push(this);
    // const p = path.join(
    //   path.dirname(process.mainModule.filename),
    //   "data",
    //   "products.json"
    // );
    fs.readFile(p, (err, fileContent) => {
      // console.log(err);
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
