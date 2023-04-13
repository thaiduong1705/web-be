const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123456789",
    database: "job_recomendation",
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to database.");
    }
});
module.exports = connection;
