const connection = require("../config/db.connect");
class CompanyController {
    // [GET]: /company/get-all-company
    getAllCompany(req, res, next) {
        connection.execute("SELECT * FROM CONGTY", (err, rows, fields) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(rows);
        });
    }

    // [GET]: /company/get-company/:id
    getCompany(req, res, next) {
        connection.execute(`SELECT * FROM CONGTY WHERE MaCongTy=${req.params.id}`, (err, rows, fields) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(rows);
        });
    }

    // [POST]: /company/create-new-company
    createCompany(req, res, next) {
        const columnNames = [
            "TenCongTy",
            "Website",
            "DiaChiChinh",
            "GioiThieuCongTy",
            "SoLuongNhanVienMin",
            "SoLuongNhanVienMax",
        ];
        let missing = [];
        columnNames.forEach((name) => {
            if (!req.body.hasOwnProperty(name)) {
                missing.push(name);
            }
        });
        if (missing.length != 0) {
            res.status(400).json("Missing: " + missing);
            return;
        }
        const values = columnNames.map((name) => req.body[name]);
        connection.execute(
            `INSERT INTO congty (TenCongTy, Website, DiaChiChinh, GioiThieuCongTy, SoLuongNhanVienMin, SoLuongNhanVienMax) VALUES (?, ?, ?, ?, ?, ?);`,
            values,
            (err, result) => {
                if (err) {
                    res.status(500).json({ err, values: values });
                    return;
                }
                res.status(201).json("Number of records inserted: " + result.affectedRows);
            },
        );
    }
}

module.exports = new CompanyController();
