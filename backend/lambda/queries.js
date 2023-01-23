const Car = require('./car');

async function getAllCars(request, response) {
    console.log('Getting all cars');
    try {
        let cars = await Car.fetchAll();
        response.status(200).json(cars);
    } catch (e) {
        response.status(500).json({ info: `Failed to fetch cars ${e}` });
    }
}

async function getCar(request, response) {
    console.log('Getting car');
    console.log(request.params.id);
    try {
        let car = await Car.where({ 'id': request.params.id }).fetch({ require: true });
        response.status(200).json(car);
    } catch (e) {
        response.status(500).json({ info: `Failed to fetch car ${e}` });
    }
}

async function newCar(request, response) {
    console.log('Creating new car');
    try {
        let body = request.body;
        let car = await Car.forge({ make: body.make, 'model': body.model, 'year': body.year }).save();
        response.status(200).json(car);
    } catch (e) {
        response.status(500).json({ info: `Failed to create car ${e}` });
    }
}

async function updateCar(request, response) {
    console.log('Updating car');
    try {
        let car = await Car.where({ 'id': request.params.id }).fetch({ require: true });
        let body = request.body;
        if (body.make) car.attributes.make = body.make;
        if (body.model) car.attributes.model = body.model;
        if (body.year) car.attributes.year = body.year;
        await Car.forge(car.attributes).save();
        response.status(200).json(car);
    } catch (e) {
        response.status(500).json({ info: `Failed to update car ${e}` });
    }
}

async function deleteCar(request, response) {
    console.log('Deleting car');
    try {
        await Car.where({ 'id': request.params.id }).destroy();
        response.status(200).json({});
    } catch (e) {
        response.status(500).json({ info: `Failed to delete car ${e}` });
    }
}

module.exports = { getAllCars, getCar, newCar, updateCar, deleteCar };