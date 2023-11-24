import * as positionService from "../services/position.service";

export const getAllPositions = async (req, res) => {
    try {
        const response = await positionService.getPositionsService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllPositions: " + error,
        });
    }
};
