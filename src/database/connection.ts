const connection = require("../config/knexfile")[process.env.NODE_ENV || "production"];
const db = require("knex")(connection);

module.exports = db;
