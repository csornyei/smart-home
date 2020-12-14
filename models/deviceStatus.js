const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ledStatus: Boolean,
    createdAt: Number,
});

module.exports = mongoose.model("DeviceStatus", schema);