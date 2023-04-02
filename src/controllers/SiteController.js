class SiteController {
    index(req, res, next) {
        res.send("Trang default");
    }
}

module.exports = new SiteController();
