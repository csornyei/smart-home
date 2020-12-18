const mongoose = require('mongoose');

const schema = mongoose.Schema({
    temperature: Number,
    humidity: Number,
    createdAt: Number
});

module.exports = mongoose.model("SensorMeasurement", schema);