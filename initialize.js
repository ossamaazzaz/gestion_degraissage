//require needed modules
const mongoose = require("mongoose");

//connect to the database
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

//importing the info model
const Info = require("./models/info");

//getting the info
Info.find({}, async (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    if (result.length > 0) {
        await Info.deleteMany({});
    }
    Info.create({ money: 0 }, (err, res) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        console.log("Done!");
        process.exit();
    });
});
