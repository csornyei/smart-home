const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const mainRoutes = require('./routes/main');
const apiRoutes = require('./routes/api');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/api/', apiRoutes)
app.use('/', mainRoutes);

app.use('*', (req, res) => {
    res.status(404);
    res.render('notfound')
})

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})