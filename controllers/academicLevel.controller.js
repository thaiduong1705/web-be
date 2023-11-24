const asyncHander = require("express-async-handler");
const db = require("../models");
const CustomError = require("../error/customError");
const getAllAcademicLevels = asyncHander(async (req, res) => {
    const alLists = await db.AcademicLevel.findAll({
        order: [["id", "asc"]],
        attributes: ["id", "academicLevelName"],
    });
    return res.status(200).json(alLists);
});

const createAcademicLevel = asyncHander(async (req, res) => {
    const newResposne = await db.AcademicLevel.create({
        ...req.body,
    });

    return res.status(201).json(newResposne);
});

const updateAL = asyncHander(async (req, res) => {
    const target = await db.AcademicLevel.findByPk(req.params.alid);

    if (!target) {
        throw new CustomError(`Không có id ${req.params.alid}`, 400);
    }
    await db.AcademicLevel.update(
        { ...req.body },
        {
            where: {
                id: req.params.alid,
            },
        },
    );

    return res.status(204).send();
});

const deleteAL = asyncHander(async (req, res) => {
    const target = await db.AcademicLevel.findByPk(req.params.alid);

    if (!target) {
        throw new CustomError(`Không có id ${req.params.alid}`, 400);
    }
    await db.AcademicLevel.destroy({
        where: {
            id: req.params.alid,
        },
    });

    return res.status(204).send();
});

module.exports = {
    getAllAcademicLevels,
    createAcademicLevel,
    updateAL,
    deleteAL,
};
