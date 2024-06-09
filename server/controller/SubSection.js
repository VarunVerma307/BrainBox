// const subSection = require("../models/SubSection");
// const section = require("../models/Section");
// const { uploadImageToCloudinary } = require("cloudinary");

// exports.createSubSection = async (req, res) => {
//     try{
//         const { sectionId, title, duration, description } = req.body;

//         const video = req.files.videoFile;
      
//         if (!sectionId || !title || !duration || !description || !video) {
//           return res.status(400).json({
//             status: false,
//             message: "Missing properties",
//           });
//         }
      
//         const uploadDetails = await uploadImageToCloudinary(
//           video,
//           process.env.FOLDER_NAME
//         );
      
//         const subSectionDetails = await subSection.create({
//           title: title,
//           timeDuration: duration,
//           description: description,
//           videoUrl: uploadDetails.secure_url,
//         });
//         const updatedSection = await section.findByIdAndUpdate(
//           { _id: sectionId },
//           {
//             $push: {
//               subSection: subSectionDetails._id,
//             },
//           },
//           { new: true }
//         );
//         return res.status(200).json({
//             status: true,
//             message: "subSection created successfully",
//             updatedSection,
//           });
//     }
//     catch(error){
//         return res.status(400).json({
//             status: false,
//             message: "unable to update section",
//             error: error.message,
//           });
//     }
 
// };



// Import necessary modules
const Section = require("../models/Section")
const SubSection = require("../models/Subsection")
const { uploadimagetocloudainary } = require("../utils/imageUploader")

// Create a new sub-section for a given section
exports.createSubSection = async (req, res) => {
  try {
    // Extract necessary information from the request body
    const { sectionId, title, description } = req.body
    const video = req.files.video

    // Check if all necessary fields are provided
    if (!sectionId || !title || !description || !video) {
      return res
        .status(404)
        .json({ success: false, message: "All Fields are Required" })
    }
    console.log(video)

    // Upload the video file to Cloudinary
    const uploadDetails = await uploadimagetocloudainary(
      video,
      process.env.FOLDER_NAME
    )
    console.log(uploadDetails)
    // Create a new sub-section with the necessary information
    const SubSectionDetails = await SubSection.create({
      title: title,
      timeDuration: `${uploadDetails.duration}`,
      description: description,
      videoUrl: uploadDetails.secure_url,
    })

    // Update the corresponding section with the newly created sub-section
    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      { $push: { SubSection: SubSectionDetails._id } },
      { new: true }
    ).populate("SubSection")

    // Return the updated section in the response
    return res.status(200).json({ success: true, data: updatedSection })
  } catch (error) {
    // Handle any errors that may occur during the process
    console.error("Error creating new sub-section:", error)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

exports.updateSubSection = async (req, res) => {
  try {
    const { sectionId, subSectionId, title, description } = req.body
    const subSection = await SubSection.findById(subSectionId)

    if (!subSection) {
      return res.status(404).json({
        success: false,
        message: "SubSection not found",
      })
    }

    if (title !== undefined) {
      subSection.title = title
    }

    if (description !== undefined) {
      subSection.description = description
    }
    if (req.files && req.files.video !== undefined) {
      const video = req.files.video
      const uploadDetails = await uploadimagetocloudainary(
        video,
        process.env.FOLDER_NAME
      )
      subSection.videoUrl = uploadDetails.secure_url
      subSection.timeDuration = `${uploadDetails.duration}`
    }

    await subSection.save()

    // find updated section and return it
    const updatedSection = await Section.findById(sectionId).populate(
      "SubSection"
    )

    console.log("updated section", updatedSection)

    return res.json({
      success: true,
      message: "subSection updated successfully",
      data: updatedSection,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the subsection",
    })
  }
}

exports.deleteSubSection = async (req, res) => {
  try {
    const { subSectionId, sectionId } = req.body
    await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $pull: {
          SubSection: subSectionId,
        },
      }
    )
     await SubSection.findByIdAndDelete({ _id: subSectionId })

    // find updated section and return it
    const updatedSection = await Section.findById(sectionId).populate(
      "SubSection"
    )

    return res.json({
      success: true,
      message: "SubSection deleted successfully",
      data: updatedSection,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the SubSection",
    })
  }
}