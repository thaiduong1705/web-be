const CustomError = require("../error/customError");
const db = require("../models");
const asyncHandler = require("express-async-handler");

const getAllCommentFromPost = asyncHandler(async (req, res) => {
    const { postId } = req.params.pid;

    const comments = await db.Comment.findAll({
        where: {
            postId,
        },
    });

    if (!comments) {
        throw new CustomError("Không có bình luận nào cả", 401);
    }
    return res.status(200).json(comments);
});

const createComment = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const newComment = await db.Comment.create({ ...req.body, candidateId: id });
    return res.status(201).json(newComment);
});

const getCommentsOfUser = asyncHandler(async (req, res) => {
    const { candidateId } = req.params.cid;
    const comments = await db.Comment.findAll({
        where: {
            candidateId,
        },
    });

    return res.status(200).json(comments);
});

const updateComment = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const targetComment = await db.Comment.findOne({
        where: {
            id: req.params.comid,
            candidateId: id,
        },
    });

    if (!targetComment) {
        throw new CustomError("Không có bình luận trùng khớp", 400);
    }

    await db.Comment.update(req.body, {
        where: {
            id: req.params.comid,
            candidateId: id,
        },
    });

    return res.status(204).send();
});

const deleteComment = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const targetComment = await db.Comment.findOne({
        where: {
            id: req.params.comid,
            candidateId: id,
        },
    });

    if (!targetComment) {
        throw new CustomError("Không có bình luận trùng khớp", 400);
    }
    await db.Comment.destroy({
        where: {
            id: req.params.comid,
            candidateId: id,
        },
    });

    return res.status(204).send();
});

module.exports = { createComment, getAllCommentFromPost, getCommentsOfUser, updateComment, deleteComment };
