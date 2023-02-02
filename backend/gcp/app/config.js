const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '35.226.135.187',
        user: 'postgres',
        password: 'pdgc2023Rc!',
        database: 'postgres',
        charset: 'utf8'
    }
});

module.exports.knex = knex;