import { DB_HOST, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER } from '.'

console.log("dfajsdfajshdjkf", process.env.DB_HOST)
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      database: "toxicology-db",
      user: 'postgres',
      password: '1234@mudar',
    },
    migrations: {
      directory: "../database/migrations",
    },
    seeds: {
      directory: "../database/seeds",
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      database: POSTGRES_DB,
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      ssl: {
        rejectUnauthorized: false,
      }
    },
    migrations: {
      directory: "../database/migrations",
    },
    seeds: {
      directory: "../database/seeds",
    },
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
