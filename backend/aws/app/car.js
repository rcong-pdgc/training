const knex = require('./config').knex;
const bookshelf = require('bookshelf')(knex);

const Car = bookshelf.Model.extend({
    tableName: 'cars'
});

module.exports = Car;