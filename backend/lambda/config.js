const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'postgres-rds.cdfxk7sszzkb.us-west-2.rds.amazonaws.com',
        user: 'postgres',
        password: 'pdgc2023Rc!',
        database: 'postgres',
        charset: 'utf8'
    }
});

module.exports.knex = knex;