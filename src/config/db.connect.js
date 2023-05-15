// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "123456789",
//     database: "job_recomendation",
// });

// connection.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Connected to database.");
//     }
// });
// module.exports = connection;
const { Sequelize, Model } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("job_recommendation", "root", null, {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export default connectDatabase;
