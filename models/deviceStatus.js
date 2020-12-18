const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ledStatus: Boolean,
    coloredLeds: Object,
    createdAt: Number,
});

module.exports = mongoose.model("DeviceStatus", schema);