const File = require("../model/fileStore.model");


exports.fileUpload=async (req, res, next) => {
  try {
    console.log(req.files)
    res.send(req.files)
  } catch (error) {
    
  }
}
