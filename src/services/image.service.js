const cloudinary = require("../config/cloudinary");
const fs = require("fs");
export const uploadPhoto = async (file) => {
    try {
        const response = await cloudinary.uploader.upload(file.path, { folder: "vieclam" });
        const result = fs.unlink(file.path, (err) => {
            if (err) {
                return err;
            } else {
                return null;
            }
        });

        return { response, result };
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
