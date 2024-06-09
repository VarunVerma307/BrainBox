const cloudinary = require('cloudinary').v2
exports.uploadimagetocloudainary =async(file,folder,quality,height)=>{

    if (!file || !file.tempFilePath) {
        throw new Error('File or tempFilePath is missing.');
      }
    const options = { folder }
    if (height) {
      options.height = height
    }
    if (quality) {
      options.quality = quality
    }
    options.resource_type = "auto"
    console.log("OPTIONS", options)
    return await cloudinary.uploader.upload(file.tempFilePath, options)
}