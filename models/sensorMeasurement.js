const mongoose = require('mongoose');

const schema = mongoose.Schema({
    temperature: String,
    humidity: String,
    createdAt: Number
});

module.exports = mongoose.model("SensorMeasurement", schema);