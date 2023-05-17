import db from "../models";
import bcryptjs from "bcryptjs";
import { v4 } from "uuid";
require("dotenv").config();
import mockdata from "../data/mockdata.json";
import mockCompany from "../data/congty.json";
import mockJob from "../data/vieclam.json";

const hashPassword = (password) => bcryptjs.hashSync(password, bcryptjs.genSaltSync(12));

export const insertService = async () => {
    try {
        // mockdata["Ngành nghề"]?.data.forEach((data) => {
        //     let careerId = v4();
        //     db.Career.create({
        //         id: careerId,
        //         careerName: data,
        //     });
        // });
        // mockdata["Cấp bậc"].forEach((data) => {
        //     let positionId = v4();
        //     db.Position.create({
        //         id: positionId,
        //         positionName: data,
        //     });
        // });
        // mockdata["Loại hình"].forEach((data) => {
        //     let id = v4();
        //     db.WorkingType.create({
        //         id: id,
        //         workingTypeName: data,
        //     });
        // });
        // mockdata["Trình độ"].forEach((data) => {
        //     let id = v4();
        //     db.AcademicLevel.create({
        //         id: id,
        //         academicLevelName: data,
        //     });
        // });
        // mockdata["Vị trí"]?.data.forEach((data) => {
        //     let id = v4();
        //     db.District.create({
        //         id: id,
        //         districtName: data,
        //     });
        // });
        // mockCompany.detailComapanies.forEach((data) => {
        //     let id = v4();
        //     db.Company.create({
        //         id: id,
        //         companyName: data.header.companyName,
        //         imageLink: data.header.imageLink,
        //         url: data.header.url,
        //         address: data.header.place,
        //     });
        // });
        // const listIdCompany = await db.Company.findAll({ attributes: ["id"] });
        // const listIdCareer = await db.Career.findAll({ attributes: ["id"], raw: true });
        // listIdCompany.forEach((obj) => {
        //     db.CompanyCareer.bulkCreate([
        //         {
        //             companyId: obj.id,
        //             careerId: listIdCareer[0].id,
        //         },
        //         {
        //             companyId: obj.id,
        //             careerId: listIdCareer[1].id,
        //         },
        //     ]);
        // });
        // mockJob.detailJobs.forEach((data) => {
        //     let id = v4();
        //     db.Post.create({
        //         id: id,
        //         jobTitle: data.header.jobTitle,
        //         companyId: "185e7ee8-6810-4b60-bc32-5d9bb4884c0b",
        //         salaryMin: 10,
        //         salaryMax: 12,
        //         ageMin: 18,
        //         ageMax: 40,
        //         experienceYear: 1,
        //         endDate: new Date("06/12/2023"),
        //         needNumber: 3,
        //         sex: 1,
        //         jobDescribe: mockJob.detailJobs[0].longInfo[0]["Mô tả công việc"].join("\n"),
        //         benefits: mockJob.detailJobs[0].longInfo[1]["Quyền lợi được hưởng"].join("\n"),
        //         jobRequirement: mockJob.detailJobs[0].longInfo[2]["Yêu cầu công việc"].join("\n"),
        //         contact: mockJob.detailJobs[0].longInfo[3]["Thông tin liên hệ"].join("\n"),
        //     });
        // });
        return {
            msg: "Done",
            err: 0,
        };
    } catch (error) {
        return error;
    }
};
