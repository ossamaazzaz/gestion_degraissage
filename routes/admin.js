const express = require("express");
const router = express.Router();

//require controllers
const homeController = require("../controllers/admin/home");
const productsController = require("../controllers/admin/products");
const ordersController = require("../controllers/admin/orders");
const addProductController = require("../controllers/admin/addProduct");
const deleteProductController = require("../controllers/admin/deleteProduct");
const updateProductController = require("../controllers/admin/updateProduct");
const logoutController = require("../controllers/logout");

//require middleware
const isAdmin = require("../middleware/isAdmin");
//handling requests 
router.get("/", isAdmin, homeController);
router.get("/products", isAdmin, productsController);
router.get("/orders", isAdmin, ordersController);
router.post("/products/add", isAdmin, addProductController);
router.delete("/products/delete/:id", isAdmin, deleteProductController);
router.post("/products/update", isAdmin, updateProductController);
router.get("/logout", logoutController);

module.exports = router;
