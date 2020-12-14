const router = require('express').Router();
const deviceStatusController = require('../controllers/deviceStatusController');

router.get('/', (req, res) => {
    res.send('API')
})

router.get('/led', async (req, res) => {
    const status = await deviceStatusController.getLastDeviceStatus();
    res.send(status);
})

router.post('/led', async (req, res) => {
    const {ledStatus} = req.body;
    const status = await deviceStatusController.createNewDeviceStatus(ledStatus);
    res.send(status)
})

module.exports = router;