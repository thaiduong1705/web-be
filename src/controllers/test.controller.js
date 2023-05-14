// Với mỗi method ở đây phải ghi nó là phương thức nào với đường link nào. Vd: [GET] /api/test
class TestController {
    //[GET] /api/test
    index(req, res) {
        res.send("ok");
    }
}

module.exports = new TestController();
