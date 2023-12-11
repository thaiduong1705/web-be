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
    const newComment = await db.Comment.create(req.body);
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

module.exports = { createComment, getAllCommentFromPost, getCommentsOfUser };
