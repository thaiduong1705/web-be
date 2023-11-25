const asyncHander = require("express-async-handler");
const db = require("../models");
const CustomError = require("../error/customError");
const getWorkingTypes = asyncHander(async (req, res) => {
    const wtList = await db.WorkingType.findAll({
        order: [["id", "asc"]],
        attributes: ["id", "workingTypeName"],
    });
    return res.status(200).json(wtList);
});

const createWorkingType = asyncHander(async (req, res) => {
    const newResposne = await db.WorkingType.create({
        ...req.body,
    });

    return res.status(201).json(newResposne);
});

const updateWT = asyncHander(async (req, res) => {
    const target = await db.WorkingType.findByPk(req.params.wtid);

    if (!target) {
        throw new CustomError(`Không có id ${req.params.wtid}`, 400);
    }
    await db.WorkingType.update(
        { ...req.body },
        {
            where: {
                id: req.params.wtid,
            },
        },
    );

    return res.status(204).send();
});

const deleteWT = asyncHander(async (req, res) => {
    const target = await db.WorkingType.findByPk(req.params.wtid);

    if (!target) {
        throw new CustomError(`Không có id ${req.params.wtid}`, 400);
    }
    await db.WorkingType.destroy({
        where: {
            id: req.params.wtid,
        },
    });

    return res.status(204).send();
});

module.exports = { getWorkingTypes, createWorkingType, updateWT, deleteWT };
