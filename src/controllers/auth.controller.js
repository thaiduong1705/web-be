import * as authService from "../services/auth.service";

export const register = async (req, res) => {
    const { name, password } = req.body;
    try {
        if (!name || !password) {
            return res.status(400).json({
                err: 1,
                msg: "Missing input!",
            });
        }
        const response = await authService.registerService(req.body);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at auth controller: " + error,
        });
    }
};

export const login = async (req, res) => {
    const { name, password } = req.body;
    try {
        if (!name || !password) {
            return res.status(400).json({
                err: 1,
                msg: "Missing input!",
            });
        }
        const response = await authService.registerService(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at auth controller: " + error,
        });
    }
};
