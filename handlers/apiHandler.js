"use strict"
const sqlQuery = require("../sqlQuery");
const sqlStatement = require("../sqlStatement/apiSQL");

exports.getLanguageList = async function(req, res) {
    let result = await sqlQuery(sqlStatement.getLanguageListSQL);
    res.json(result);
}

exports.getSubjectList = async function(req, res) {
    let result = await sqlQuery(sqlStatement.getSubjectListSQL);
    res.json(result);
}