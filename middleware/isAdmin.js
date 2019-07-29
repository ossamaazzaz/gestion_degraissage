
module.exports = (req, res, next) => {
    if (!req.session.admin)
        return res.redirect("/auth/login");
    next();
}