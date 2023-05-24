export const uploadPhoto = async () => {
    try {
        const response = await cloudinary.uploader.upload();
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
