const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http')
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

app.get('/default/:id', queries.getCar);

app.get('/default/', queries.getAllCars);

app.post('/default/', queries.newCar);

app.put('/default/:id', queries.updateCar);

app.delete('/default/:id', queries.deleteCar);

// app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
// });

module.exports.handler = serverless(app);