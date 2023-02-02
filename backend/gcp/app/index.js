const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http')
const bodyParser = require('body-parser');
const queries = require('./queries');

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(cors());
app.options('*', cors());

app.use(function (req, res, next) {
    res.setHeader('Accept', 'application/json');
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.get('/:id', queries.getCar);

app.get('', queries.getAllCars);

app.post('', queries.newCar);

app.put('/:id', queries.updateCar);

app.delete('/:id', queries.deleteCar);

app.listen(3000);

module.exports.app = app;
