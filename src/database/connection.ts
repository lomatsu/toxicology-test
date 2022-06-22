import KnexInstance, { Knex as KnexType } from "knex"

const config = require('../config/knexfile')[process.env.NODE_ENV || 'development'];
export const knex: KnexType<any, unknown[]> = require('knex')(config)