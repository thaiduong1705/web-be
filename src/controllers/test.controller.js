class TestController {
    index(req, res) {
        res.send("Đây là trang test!");
    }
}

module.exports = new TestController();
