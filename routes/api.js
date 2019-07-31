const express = require("express");
const router = express.Router();

//require controllers
const getProductsController = require("../controllers/api/getProducts");
const makePreparedContoller = require("../controllers/api/makePrepared");

//require middleware

//handling requests 
router.get("/products", getProductsController);
router.put("/orders/:id/make/prepared", makePreparedContoller);
module.exports = router;
