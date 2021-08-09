const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');

/**
 * Configures the temp directory where images will be stored before uploading to the cloud
 */
const configTempImageDir = async () => {
    try {
        await fs.promises.access('tempImages');
    } catch (error) {
        await fs.promises.mkdir('tempImages');
    }
}

/**
 * Deletes a temporary image file
 */
const deleteTempFile = async (filePath) => {
    try {
        await fs.promises.rm(filePath);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Configures the middleware that will handle image uploads
 */
const configImageParserMiddleware = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'server/tempImages');
        },
        filename: function (req, file, cb) {
            cb(null, uuidv4());
        }
    });

    const fileFilter = (req, file, cb) => {
        if (file.mimetype.indexOf('image/') > -1) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }

    return multer({ storage: storage, fileFilter: fileFilter });
}


/**
 * Uploads an image to the cloud, deletes the local file when it's done
 * @param localPath the local path of the file
 * @returns the path of the file in the cloud
 */
const uploadImage = async (localPath) => {
    try {
        const result = await cloudinary.uploader.upload(localPath);
        await deleteTempFile(localPath);

        return result.url;
    } catch (error) {
        console.log(error);
        throw new Error('Unable to upload the image file');
    }
}

module.exports = {
    configImageParserMiddleware,
    uploadImage,
    configTempImageDir,
    deleteTempFile
}