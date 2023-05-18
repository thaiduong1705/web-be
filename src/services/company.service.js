import { Op } from "sequelize";
import db from "../models";
import { v4 } from "uuid";
export const getCompaniesService = async () => {
    try {
        const res = await db.Company.findAll({
            include: [{ model: db.Career, as: "Career", attributes: ["careerName"] }],
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
    introduction,
    companySize,
    careerList,
}) => {
    try {
        const company = await db.Company.create({
            id: v4(),
            companyName,
            imageLink,
            url: url ?? null,
            address: address,
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
        const response = await db.Company.findByPk(id, {
            include: [{ model: db.Career, as: "Career", attributes: ["careerName"] }],
        });
        return {
            err: response ? 0 : 2,
            msg: response ? "Oke" : "Fail to get company by id",
            data: response,
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
        console.log({
            error,
        });
    }
};
