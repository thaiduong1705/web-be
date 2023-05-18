import * as districtService from "../services/district.service";

export const getAllDistricts = async (req, res) => {
    try {
        const response = await districtService.getDistrictsService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllDistricts: " + error,
        });
    }
};
