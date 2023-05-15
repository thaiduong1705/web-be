const db = require("../models");
const models = require("../models");
const Career = models.Career;
const Company = models.Company;
const CompanyCareer = models.CompanyCareer;
module.exports = () => {
    // Company.create({
    //     id: "1",
    //     companyName: "My super company",
    // })
    //     .then((newCompany) => {
    //         // The get() function allows you to recover only the DataValues of the object
    //         console.log(newCompany.get());
    //     })
    //     .catch((err) => {
    //         console.log("Error while company creation : ", err);
    //     });

    // Career.bulkCreate([
    //     { id: "a", name: "nghề 1" },
    //     { id: "b", name: "nghề 2" },
    //     { id: "c", name: "nghề 3" },
    // ])
    //     .then((newCareers) => {
    //         console.log(newCareers);
    //     })
    //     .catch((err) => {
    //         console.log("Error while users creation : ", err);
    //     });
    CompanyCareer.bulkCreate([
        { companyId: "1", careerId: "a" },
        { companyId: "1", careerId: "b" },
        { companyId: "1", careerId: "c" },
    ])
        .then((r) => {
            console.log(r);
        })
        .catch((err) => {
            console.log(err);
        });
};
