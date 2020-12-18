const DeviceStatusModel = require("../models/deviceStatus");

const createNewDeviceStatus = ({ledStatus, coloredLeds}) => {
    return new DeviceStatusModel({
        ledStatus,
        coloredLeds,
        createdAt: Date.now()
    }).save();
}

const getLastDeviceStatus = () => {
    return DeviceStatusModel.find({}).sort({createdAt: -1}).limit(1);
}

const getAllDeviceStatus = () => {
    return DeviceStatusModel.aggregate([
        {$project: {_id: 0, ledStatus: 1, createdAt: 1}}
    ]);
}

module.exports = {
    createNewDeviceStatus,
    getLastDeviceStatus,
    getAllDeviceStatus,
}