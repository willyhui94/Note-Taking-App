"use strict"
const pg = require("pg");

const dbConfig = {
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
}
const client = new pg.Client(dbConfig);
client.connect();


const sqlQuery = async function(sqlStatement, dataArr) {
    try {
        await client.query("BEGIN");
        let resultSet = await client.query(sqlStatement, dataArr);
        await client.query("COMMIT");
        resultSet = resultSet.rows;
        return resultSet;
    }
    catch (err) {
        console.log(err);
        await client.query("ROLLBACK");
        return err;
    }
}

module.exports = sqlQuery;