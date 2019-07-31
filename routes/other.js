const express = require("express");
const router = express.Router();

//require controllers
const loginController = require("../controllers/login");

//require middleware

//handling requests 
router.get("/auth/login", (req, res) => {
    res.render("login")
});
router.get("/", (req, res) => {
    res.redirect("/seller/create");
});
router.post("/auth/login", loginController);

module.exports = router;
