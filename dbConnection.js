"use strict"
const pg = require("pg");
require("dotenv").config();

const dbConfig = {
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
}
const client = new pg.Client(dbConfig);
client.connect();

module.exports = client;