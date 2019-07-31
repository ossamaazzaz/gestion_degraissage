const express = require("express");
const router = express.Router();

//require controllers
const getProductsController = require("../controllers/api/getProducts");
const makePreparedContoller = require("../controllers/api/makePrepared");
const makeRecoveredContoller = require("../controllers/api/makeRecovered");

//require middleware

//handling requests 
router.get("/products", getProductsController);
router.put("/orders/:id/make/prepared", makePreparedContoller);
router.put("/orders/:id/make/recovered", makeRecoveredContoller);

module.exports = router;
