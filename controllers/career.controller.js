const CustomError = require("../error/customError");
const db = require("../models");
const asyncHander = require("express-async-handler");

const getAllCareers = asyncHander(async (req, res) => {
    const careers = await db.Career.findAll({
        attributes: ["id", "careerName"],
    });
    return res.status(200).json(careers);
});

const createCareer = asyncHander(async (req, res) => {
    const newCareer = await db.Career.create({
        ...req.body,
    });

    return res.status(201).json(newCareer);
});

const updateCareer = asyncHander(async (req, res) => {
    const target = await db.Career.findByPk(req.params.cid);

    if (!target) {
        throw new CustomError(`Không có id ${req.params.cid}`, 400);
    }
    await db.Career.update(
        { ...req.body },
        {
            where: {
                id: req.params.cid,
            },
        },
    );

    return res.status(204).send();
});

const deleteCareer = asyncHander(async (req, res) => {
    const target = await db.Career.findByPk(req.params.cid);

    if (!target) {
        throw new CustomError(`Không có id ${req.params.cid}`, 400);
    }
    await db.Career.destroy({
        where: {
            id: req.params.cid,
        },
    });

    return res.status(204).send();
});

module.exports = {
    getAllCareers,
    createCareer,
    updateCareer,
    deleteCareer,
};
