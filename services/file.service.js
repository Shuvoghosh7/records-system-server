const File = require("../model/fileStore.model");


exports.createFiledService = async (data) => {
    const result = await File.create(data)
    return result;
}
