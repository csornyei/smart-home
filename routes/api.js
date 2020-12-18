const router = require('express').Router();
const deviceStatusController = require('../controllers/deviceStatusController');
const measurementController = require('../controllers/sensorMeasurementController');

router.get('/', (req, res) => {
    res.send('API')
});

router.get('/led', async (req, res) => {
    const status = await deviceStatusController.getLastDeviceStatus();
    res.send(status);
});

router.post('/led', async (req, res) => {
    const {ledStatus, coloredLeds} = req.body;
    const status = await deviceStatusController.createNewDeviceStatus({ledStatus, coloredLeds});
    res.send(status)
});

router.get('/temp', async (req, res) => {
    const {temp, hum} = req.query;
    let status;
    if (!!temp && !!hum) {
        status = await measurementController.createNewMeasurement(req.query);
    } else {
        status = await measurementController.getLatestMeasurement();
    }
    res.send(status)
});

router.get('/temp/all', async (req, res) => {
    const allMeasurement = await measurementController.getAllMeasurement();
    res.send(allMeasurement);
})

module.exports = router;