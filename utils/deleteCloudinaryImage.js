const cloudinary = require("cloudinary").v2;
const getPublicId = (imageUrl) => {
    const regex = /\/v\d+\/(.*\/[^.]+)\.\w+/;

    // Use the regular expression to extract the folder and public ID
    const match = imageUrl.match(regex);

    // The result will be in match[1]
    const folderAndPublicId = match ? match[1] : null;
    return folderAndPublicId;
};
const deleteCloudinaryImage = async (imageUrl) => {
    if (imageUrl) {
        const publicId = getPublicId(imageUrl);
        if (public) {
            await cloudinary.uploader.destroy(publicId);
        }
    }
};

module.exports = deleteCloudinaryImage;
