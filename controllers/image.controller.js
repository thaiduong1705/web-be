import { deletePhoto, uploadPhoto } from "../services/image.service";

export const uploadController = async (req, res) => {
    try {
        const file = req.file;
        const response = await uploadPhoto(file);
        if (!response) {
            return res.status(400).json({ err: 1 });
        }
        return res.status(200).json({ err: 0, res: response });
    } catch (error) {
        console.log(error);
    }
};

export const deleteUploadController = async (req, res) => {
    try {
        const imageLink = req.body.imageLink;
        const response = await deletePhoto(imageLink);
        if (!response || response?.result !== "ok") {
            return res.status(400).json({ err: 1, res: response || "" });
        }
        return res.status(200).json({ err: 0, res: response });
    } catch (error) {
        console.log(error);
    }
};
