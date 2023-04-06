// Với mỗi method ở đây phải ghi nó là phương thức nào với đường link nào. Vd: [GET] /api/test
class TestController {
    //[GET] /api/test
    index(req, res) {
        res.status(200).json({
            message: "Trang test cho đường dẫn /api/test",
        });
    }
}

module.exports = new TestController();
