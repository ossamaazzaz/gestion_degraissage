const express = require("express");
const router = express.Router();

//require controllers
const homeController = require("../controllers/admin/home");
const productsController = require("../controllers/admin/products");
const ordersController = require("../controllers/admin/orders");
const addProductController = require("../controllers/admin/addProduct");
const deleteProductController = require("../controllers/admin/deleteProduct");
const updateProductController = require("../controllers/admin/updateProduct");

//require middleware

//handling requests 
router.get("/", homeController);
router.get("/products", productsController);
router.get("/orders", ordersController);
router.post("/products/add", addProductController);
router.delete("/products/delete/:id", deleteProductController);
router.post("/products/update", updateProductController);

module.exports = router;
