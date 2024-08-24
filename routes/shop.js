const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("../controllers/adminController");
const shopController = require("../controllers/shopController");

const router = express.Router();

router.get("/", shopController.shopController);

module.exports = router;
