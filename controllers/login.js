module.exports = (req, res) => {
    if ((req.body.email == "tahar") && (req.body.password == "12345678")) {
        req.session.admin = true;
    }
    res.redirect("/admin");
}