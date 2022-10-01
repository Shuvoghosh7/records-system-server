const { getRecordService, createRecordService } = require('../services/record.services');

exports.getRecord=async (req, res, next) => {
    try {
      //create method
      const record=await getRecordService();
  
      res.send(record)
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not found",
        error : error.message
      })
  
    }
    
  }
  exports.createRecord=async (req, res, next) => {
    try {
      const result=await createRecordService(req.body)
      res.status(200).json({
        stauts: "success",
        massage: "Data inside successfully",
        data: result
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
    }
  }


