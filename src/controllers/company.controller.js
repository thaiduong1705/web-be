const e = require("express");
const connection = require("../config/db.connect");
class CompanyController {
    // [GET]: /company/get-all-company
    getAllCompany(req, res, next) {
        // try {
        //     const [rows, fields] = await connection.execute("SELECT * FROM CONGTY");
        //     res.status(200).json(rows);
        // } catch (error) {
        //     res.status(400).json(error);
        // }
        connection.execute("SELECT * FROM CONGTY", (err, rows, fields) => {
            if (err) {
                res.status(400).json(err);
                return;
            }
            res.status(200).json(rows);
        });
    }

    // [GET]: /company/get-company/:id
    getCompanyById(req, res, next) {
        connection.execute(`SELECT * FROM CONGTY WHERE MaCongTy=${req.params.id}`, (err, rows, fields) => {
            if (err) {
                res.status(400).json(err);
                return;
            }
            res.status(200).json(rows);
        });
    }

    // [GET]: /company/get-companies/:name
    getCompaniesByName(req, res, next) {
        if (Object.keys(req.query).length === 0) {
            res.status(404).json("No query parameter!");
            return;
        }
        console.log(typeof req.query.name);
        console.log(req.query.name);

        connection.execute(`SELECT * FROM CONGTY WHERE TenCongTy LIKE "%${req.query.name}%"`, (err, rows, fields) => {
            if (err) {
                res.status(400).json(err);
                next(err);
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
                    res.status(400).json({ err, values: values });
                    return;
                }
                res.status(201).json("Number of records inserted: " + result.affectedRows);
            },
        );
    }

    // [PUT]: /company/update-company
    updateCompany(req, res, next) {
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

        connection.execute(
            `UPDATE CONGTY 
            SET TenCongty="${req.body["TenCongTy"]}", 
            Website="${req.body["Website"]}", 
            DiaChiChinh="${req.body["DiaChiChinh"]}",
            GioiThieuCongTy="${req.body["GioiThieuCongTy"]}", 
            SoLuongNhanVienMin="${req.body["SoLuongNhanVienMin"]}",
            SoLuongNhanVienMax="${req.body["SoLuongNhanVienMax"]}"
            WHERE MaCongTy=${req.params.id};`,
            (err, result) => {
                if (err) {
                    res.status(400).json({ err });
                    return;
                }
                res.status(201).json(`Updated record has id: ${req.params.id}`);
            },
        );
    }
}

module.exports = new CompanyController();
