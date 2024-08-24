const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const adminController = require("../controllers/adminController");
// const products = [];
// /admin/add-product => GET
router.get("/add-product", adminController.adminGetController);

// /admin/add-product => POST
router.post("/add-product", adminController.adminPostController);

exports.routes = router;
// exports.products = products;
