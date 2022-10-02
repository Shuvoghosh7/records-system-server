const Record = require("../model/record.model");


exports.getRecordService = async () => {
    const result = await Record.find({})
    return result;
}
exports.createRecordService = async (data) => {
    const result = await Record.create(data)
    return result;
}

exports.updateRecordService = async (id,data) => {
    const result = await Record.updateOne({_id:id},data,{
        runValidators:true
    })
    return result;
}

exports.deleteRecordService = async (id) => {
    const result = await Record.deleteOne({_id:id})
    return result;
}

