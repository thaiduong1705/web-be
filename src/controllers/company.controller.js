const connection = require("../config/db.connect");
class CompanyController {
    // [GET]: /company/
    getAllCompany(req, res, next) {
        connection.execute("SELECT * FROM CONGTY", (err, rows, fields) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(rows);
        })
    }
}

module.exports = new CompanyController();