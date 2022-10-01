const Record = require("../model/record.model");


exports.getRecordService = async () => {
    const result = await Record.find({})
    return result;
}
exports.createRecordService = async (data) => {
    const result = await Record.create(data)
    return result;
}


