const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'db',
        user: 'postgres',
        password: 'pdgc2023Rc!',
        database: 'postgres',
        charset: 'utf8'
    }
});

module.exports.knex = knex;