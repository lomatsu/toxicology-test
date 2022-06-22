<<<<<<< HEAD
const connection = require("../config/knexfile")[process.env.NODE_ENV || "production"];
const db = require("knex")(connection);

module.exports = db;
=======
import KnexInstance, { Knex as KnexType } from "knex"

const config = require('../config/knexfile')[process.env.NODE_ENV || 'development'];
export const knex: KnexType<any, unknown[]> = require('knex')(config)
>>>>>>> main
