const express = require("express");
const router = express.Router();

//require controllers
const getProductsController = require("../controllers/api/getProducts");
//require middleware

//handling requests 
router.get("/products", getProductsController);

module.exports = router;
