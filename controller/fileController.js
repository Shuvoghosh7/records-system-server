const File = require("../model/fileStore.model");
const { createFiledService } = require("../services/file.service");


exports.fileUpload=async (req, res, next) => {
  try {
    console.log(req.files)
    res.send(req.files)
  } catch (error) {
    
  }
}
