//require needed modules
const express = require("express");
const expressEdge = require("express-edge");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require('cookie-parser');
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");

//require routes
const sellerRoutes = require("./routes/seller");
const adminRoutes = require("./routes/admin");
const apiRoutes = require("./routes/api");

//create the express app
const app = express();

//connect to DB
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

//sessions
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//cookies
app.use(cookieParser());


//body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set up views and front-end files directories
app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", __dirname + "/views");

//using routes
app.use("/seller", sellerRoutes);
app.use("/admin", adminRoutes);
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.redirect("/seller");
});
//create the server
const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log("server listening on port " + port);
});