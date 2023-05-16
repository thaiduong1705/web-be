import * as workingTypeService from "../services/workingType.service";

export const getAllWorkingTypeService = async (req, res) => {
    try {
        const response = await workingTypeService.getWorkingTypesService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllWorkingTypeService: " + error,
        });
    }
};
