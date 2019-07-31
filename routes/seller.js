const express = require("express");
const router = express.Router();

//require controllers
const homeController = require("../controllers/seller/home");
const addOrderController = require("../controllers/seller/addOrder");
const dbController = require("../controllers/seller/db");
const preparedOrdersController = require("../controllers/seller/preparedOrders");
const recoveredOrdersController = require("../controllers/seller/recoveredOrders");

//require middleware

//handling requests 
router.get("/", dbController);
router.get("/prepared", preparedOrdersController);
router.get("/create", homeController);
router.post("/orders/add", addOrderController);
router.get("/recovered", recoveredOrdersController);

module.exports = router;
