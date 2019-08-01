"use strict"
const sqlQuery = require("../sqlQuery");
const sqlStatement = require("../sqlStatement/signupSQL");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.getSignupPage = function(req, res, next) {
    const options = {
        layout: false,
        title: "Signup Page", 
    }
    res.render("layouts/signupPage.ejs", options);
}

exports.createNewUser = async function(req, res, next) {
    // let hashPassword = await bcrypt.hash(req.body.password, process.env.BCRYPT_SALTROUND);
    let dataArr = [
        req.body.firstName, 
        req.body.lastName, 
        req.body.emailAddress, 
        req.body.password
        // hashPassword
    ];
    await sqlQuery(sqlStatement.createNewUserSQL, dataArr);
    res.redirect("/login");
}