const asyncHander = require("express-async-handler");
const db = require("../models");
const CustomError = require("../error/customError");

const createNewPosition = asyncHander(async (req, res) => {
    const newResposne = await db.Position.create({
        ...req.body,
    });

    return res.status(201).json(newResposne);
});

const getAllPositions = asyncHander(async (req, res) => {
    const pLists = await db.Position.findAll({
        order: [["id", "asc"]],
        attributes: ["id", "positionName"],
    });
    return res.status(200).json(pLists);
});

const updatePosition = asyncHander(async (req, res) => {
    const target = await db.Position.findByPk(req.params.posid);

    if (!target) {
        throw new CustomError(`Không có id ${req.params.posid}`, 400);
    }
    await db.Position.update(
        { ...req.body },
        {
            where: {
                id: req.params.posid,
            },
        },
    );

    return res.status(204).send();
});

const deletePosition = asyncHander(async (req, res) => {
    const target = await db.Position.findByPk(req.params.posid);

    if (!target) {
        throw new CustomError(`Không có id ${req.params.posid}`, 400);
    }
    await db.Position.destroy({
        where: {
            id: req.params.posid,
        },
    });

    return res.status(204).send();
});

module.exports = { getAllPositions, createNewPosition, updatePosition, deletePosition };
