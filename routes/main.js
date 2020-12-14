const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {active: 'home'})
});

router.get('/statistics', (req, res) => {
    console.log('hello')
    res.render('stats', {active: 'stats'})
});

module.exports = router;