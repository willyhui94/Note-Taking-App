"use strict"

exports.getLoginPage = function (req, res, next) {
    const options = {
        layout: false,
        title: "Login Page"
    }
    res.render("layouts/loginPage.ejs", options)
}