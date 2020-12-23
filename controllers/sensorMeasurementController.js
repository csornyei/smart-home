const SensorMeasurement = require('../models/sensorMeasurement');

const isNumeric = (str) => {
    if (typeof str !== 'string') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

const createNewMeasurement = ({temp, hum}) => {
    if (isNumeric(temp) && isNumeric(hum)) {
        return new SensorMeasurement({
            temperature: temp,
            humidity: hum,
            createdAt: Date.now()
        }).save();
    }
    return {
        'error': 'Not valid measurement data!'
    }
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