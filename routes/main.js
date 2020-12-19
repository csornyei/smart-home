const router = require('express').Router();
const deviceStatusController = require('../controllers/deviceStatusController');
const { format } = require('date-fns');

router.get('/', (req, res) => {
    res.render('index', {
        active: 'home',
    })
});

router.get('/statistics', async (req, res) => {
    const deviceStatuses = await deviceStatusController.getAllDeviceStatus();
    res.render('stats', {
        active: 'stats',
        statistics: deviceStatuses.map(status => {
            return {
                createdAt: format(status.createdAt, 'yyyy. MM. dd. HH:mm:ss'),
                ledStatus: status.ledStatus ? 1 : 0
            }
        })
    })
});

router.get('/temperature', async (req, res) => {
    res.render('temperature', {
        active: 'temperature'
    })
})

module.exports = router;