const express = require("express");
const router = express.Router();

//require controllers
const homeController = require("../controllers/seller/home");
const addOrderController = require("../controllers/seller/addOrder");
//require middleware

//handling requests 
router.get("/", homeController);
router.post("/orders/add", addOrderController);

module.exports = router;
