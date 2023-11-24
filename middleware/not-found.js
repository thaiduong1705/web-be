const notFound = (req, res) => {
    res.status(404).send(`Route ${req.originalUrl} không tồn tại`);
};

module.exports = notFound;
