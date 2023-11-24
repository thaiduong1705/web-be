import * as userService from "../services/user.service";
export const getCurrent = async (req, res) => {
    const { id } = req.user;
    try {
        const response = await userService.getCurrentUserService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at get current user: " + error,
        });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { newUser, newPass } = req.body;
        const { id } = req.user;
        const response = await userService.changeInfoUserCurrentService(id, newUser, newPass);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at update user: " + error,
        });
    }
};
