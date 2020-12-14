const DeviceStatusModel = require("../models/deviceStatus");

const createNewDeviceStatus = (ledStatus) => {
    return new DeviceStatusModel({
        ledStatus,
        createdAt: Date.now()
    }).save();
}

const getLastDeviceStatus = (ledStatus) => {
    return DeviceStatusModel.find({}).sort({createdAt: -1}).limit(1);
}

module.exports = {
    createNewDeviceStatus,
    getLastDeviceStatus
}