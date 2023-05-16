import { v4 } from "uuid";
import db from "../models";

export const getPostsService = async () => {
    try {
        const res = await db.Post.findAll({
            include: [{ model: db.Company, as: "company", attributes: ["companyName", "imageLink"] }],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get posts",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};

export const createPostService = async ({
    jobTitle,
    companyId,
    positionId,
    salaryMin,
    salaryMax,
    ageMin,
    ageMax,
    experienceYear,
    academicLevelId,
    workingTypeId,
    endDate,
    needNumber,
    sex,
    jobDescribe,
    benefits,
    jobRequirement,
    contact,
    careerList,
    districtList,
    workingAddress,
}) => {
    try {
        let careerStatus = true;
        let districtStatus = true;
        const id = v4();
        // const post = await db.Post.create({
        //     id: id,
        //     jobTitle,
        //     companyId,
        //     positionId,
        //     salaryMin,
        //     salaryMax,
        //     ageMin,
        //     ageMax,
        //     experienceYear,
        //     academicLevelId,
        //     workingTypeId,
        //     endDate: new Date(endDate),
        //     needNumber,
        //     sex,
        //     jobDescribe,
        //     benefits,
        //     jobRequirement,
        //     contact,
        // });
        // careerList.forEach((careerId) => {
        //     db.PostCareer.create({
        //         postId: 11,
        //         careerId: careerId,
        //     })
        //         .then((result) => {})
        //         .catch((err) => {
        //             careerStatus = false;
        //         });
        // });
        db.PostCareer.create({
            postId: 11,
            careerId: careerList[0],
        })
            .then((result) => {
                console.log("oke");
            })
            .catch((err) => {
                console.log(err);
            });
        // districtList.forEach((districtId) => {
        //     db.PostCareer.create({
        //         postId: 12,
        //         districtId: districtId,
        //     })
        //         .then((result) => {})
        //         .catch((err) => {
        //             districtId = false;
        //         });
        // });

        return {
            err: careerStatus && districtStatus ? 0 : 2,
            msg: careerStatus && districtStatus ? "Oke" : "Fail to create new post",
            // res: {
            //     post,
            //     careerStatus,
            //     districtStatus,
            // },
        };
    } catch (error) {
        return error;
    }
};
