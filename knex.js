const knex = require('knex');

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      database: 'carniceria11',
      user: 'root',
      password: '36772',
    },
  },
};