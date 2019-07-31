const express = require("express");
const router = express.Router();

//require controllers
const homeController = require("../controllers/seller/home");
const addOrderController = require("../controllers/seller/addOrder");
const dbController = require("../controllers/seller/db");

//require middleware

//handling requests 
router.get("/", dbController);
router.get("/create", homeController);
router.post("/orders/add", addOrderController);

module.exports = router;
