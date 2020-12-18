const SensorMeasurement = require('../models/sensorMeasurement');

const createNewMeasurement = ({temp, hum}) => {
    return new SensorMeasurement({
        temperature: temp,
        humidity: hum,
        createdAt: Date.now()
    }).save();
}

const getLatestMeasurement = () => {
    return SensorMeasurement.find({}).sort({createdAt: -1}).limit(1);
}

const getAllMeasurement = () => {
    return SensorMeasurement.find();
}

module.exports = {
    createNewMeasurement,
    getLatestMeasurement,
    getAllMeasurement
}