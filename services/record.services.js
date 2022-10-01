

exports.getRecordService = async () => {
    const result = await Brand.find({})
    return result;
}
exports.createRecordService = async (data) => {
    const result = await Brand.create(data)
    return result;
}


