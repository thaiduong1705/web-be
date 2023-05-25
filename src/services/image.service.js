const cloudinary = require("../config/cloudinary");
export const uploadPhoto = async (file) => {
    try {
        const response = await cloudinary.uploader.upload(file.path, { folder: "vieclam" });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deletePhoto = async () => {
    try {
        const response = await cloudinary.uploader.destroy();
    } catch (error) {
        console.log(error);
    }
};
