const connection = require("../config/db.connect");
// Với mỗi method ở đây phải ghi nó là phương thức nào với đường link nào. Vd: [GET] /api/test
class TestController {
    //[GET] /api/test
    index(req, res) {
        connection.execute("SELECT 1 + 1 AS solution", (err, rows) => {
            if (err) {
                res.status(400).json({
                    message: "Trang test cho đường dẫn /api/test",
                });
                return;
            }
            res.status(200).json({
                message: "Trang test cho đường dẫn /api/test " + rows[0].solution,
            });
        });
    }
}

module.exports = new TestController();
