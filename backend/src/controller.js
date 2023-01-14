const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const queries = require('./queries');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(cors());
app.options('*', cors());

app.get('/:id', queries.getCar);

app.get('/', queries.getAllCars);

app.post('/', queries.newCar);

app.put('/:id', queries.updateCar);

app.delete('/:id', queries.deleteCar);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

module.exports = app;