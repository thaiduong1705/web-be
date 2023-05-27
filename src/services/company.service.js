import { Op } from "sequelize";
import db from "../models";
import { v4 } from "uuid";
export const getCompaniesService = async () => {
    try {
        const res = await db.Company.findAll({
            include: [
                { model: db.Career, as: "Career", attributes: ["id", "careerName"] },
                { model: db.Post, as: "Posts" },
            ],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get companies",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};

export const createCompanyService = async ({
    companyName,
    imageLink,
    url,
    address,
    email,
    phone,
    introduction,
    companySize,
    careerList,
}) => {
    try {
        const company = await db.Company.create({
            id: v4(),
            companyName: companyName,
            imageLink,
            url: url ?? null,
            address: address,
            email: email,
            phone: phone,
            introduction,
            companySize,
        });
        const cc = await db.CompanyCareer.bulkCreate(
            careerList.map((careerId) => {
                return {
                    companyId: company.id,
                    careerId,
                };
            }),
        );

        return {
            err: company && cc ? 0 : 2,
            msg: company && cc ? "Oke" : "Fail to create company",
            data: {
                company,
                cc,
            },
        };
    } catch (error) {
        return {
            error,
        };
    }
};

export const getCompanyByIdService = async ({ id }) => {
    try {
        const res = await db.Company.findByPk(id, {
            include: [
                { model: db.Career, as: "Career", attributes: ["id", "careerName"] },
                { model: db.Post, as: "Posts", include: [{ model: db.Company, as: "Company" }] },
            ],
        });
        return {
            err: res ? 0 : 2,
            msg: res ? "Oke" : "Fail to get company by id",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};

export const updateCompany = async ({
    id,
    companyName,
    imageLink,
    url,
    address,
    introduction,
    companySize,
    careerNewList,
    careerOldList,
}) => {
    try {
        let resDel = [];
        let cc;
        const companyUpdate = await db.Company.update(
            {
                companyName,
                imageLink,
                url,
                address,
                introduction,
                companySize,
            },
            {
                where: {
                    id: id,
                },
            },
        );
        const company = await db.Company.findByPk(id);

        for (const oldId of careerOldList) {
            const temp = await db.CompanyCareer.destroy({
                where: {
                    [Op.and]: [{ companyId: company.id }, { careerId: oldId }],
                },
            });
            resDel.push(temp);
        }
        const hasZeroValues = resDel.some((value) => value === 0);
        if (!hasZeroValues) {
            cc = await db.CompanyCareer.bulkCreate(
                careerNewList.map((careerId) => {
                    return {
                        companyId: company.id,
                        careerId,
                    };
                }),
            );
        }

        return {
            err: companyUpdate[0] === 1 && cc && !hasZeroValues ? 0 : 2,
            msg: companyUpdate[0] === 1 && cc && !hasZeroValues ? "Oke" : "Fail to update company!",
            res: {
                companyUpdate,
                resDel,
                cc,
            },
        };
    } catch (error) {
        return error;
    }
};

export const getLimitCompaniesService = async ({ page, limit, order, companyName, careerId, ...query }) => {
    try {
        const queries = {};
        const subQuery = {};
        const offset = !page || +page <= 1 ? 0 : +page - 1;
        const numberOfItems = +limit || +process.env.LIMIT_BOOK;
        queries.offset = offset * numberOfItems;
        queries.limit = numberOfItems;

        if (order) queries.order = [order];
        if (companyName) query.companyName = { [Op.substring]: companyName };
        if (careerId) subQuery.id = { [Op.eq]: careerId };
        const count = await db.Company.count({
            where: query,
            include: [
                {
                    model: db.Career,
                    as: "Career",
                    where: subQuery,
                },
            ],
            distinct: true,
        });
        const res = await db.Company.findAll({
            include: [
                { model: db.Post, as: "Posts" },
                {
                    model: db.Career,
                    as: "Career",
                    attributes: ["id", "careerName"],
                    where: subQuery,
                },
            ],
            where: query,
            ...queries,
        });
        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Cant found companies.",
            count,
            res,
        };
    } catch (error) {
        return error;
    }
};

export const getRelatedCompanyFromCareerService = async ({ companyId, careerIds }) => {
    try {
        const res = await db.Company.findAll({
            where: {
                id: {
                    [Op.ne]: companyId,
                },
            },
            include: [
                { model: db.Career, as: "Career", where: { id: { [Op.or]: careerIds } } },
                { model: db.Post, as: "Posts" },
            ],
            district: true,
        });
        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Cant found posts.",
            res,
        };
    } catch (error) {
        console.log(error);
    }
};
