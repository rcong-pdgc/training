const knex = require('knex')({
    client: 'pg',
    connection: {
        // host: '127.0.0.1',
        host: 'db',
        user: 'postgres',
        password: 'pdgc2023Rc!',
        database: 'postgres',
        charset: 'utf8'
    }
});

module.exports.knex = knex;