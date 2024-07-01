const cloudinary = require('cloudinary').v2;

exports.uploadVideoToCloudinary = async (videoFile, folderName) => {
  try {
    const uploadOptions = {
      resource_type: "video",
      folder: folderName || "default-folder",
    };

    const result = await cloudinary.uploader.upload(videoFile.tempFilePath, uploadOptions);
    return result;
  } catch (error) {
    throw new Error(`Failed to upload video to Cloudinary: ${error.message}`);
  }
};
