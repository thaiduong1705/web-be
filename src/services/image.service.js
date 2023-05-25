const cloudinary = require("../config/cloudinary");
export const uploadPhoto = async (file) => {
    try {
        const response = await cloudinary.uploader.upload(file.path, { folder: "vieclam" });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deletePhoto = async (imageLink) => {
    try {
        const publicIdRegex = /.*\/([^/]*\/[^/]*).*/;
        const matches = imageLink.match(publicIdRegex);
        const public_id = matches[1].replace(/\.[^.]+$/, "");
        const response = cloudinary.uploader.destroy(public_id);
        return response;
    } catch (error) {
        console.log(error);
    }
};
