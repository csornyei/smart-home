const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send('Smart home app')
})

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})