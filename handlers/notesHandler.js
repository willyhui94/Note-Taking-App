"use strict"
const sqlQuery = require("../sqlQuery");
const sqlStatement = require("../sqlStatement/notesSQL");

exports.readUserAllNotes = async function (req, res) {
    let dataArr = [req.user.user_id]
    let result = await sqlQuery(sqlStatement.selectUserAllNoteSQL, dataArr);

    let options = {
        layout: false,
        title: "Notes Page",
        sideNotes: result
    };
    res.render("layouts/notesPage.ejs", options);
}

exports.readUserNote = async function (req, res) {
    let dataArr = [
        req.user.user_id, 
        req.params.id
    ];
    // console.log(dataArr);
    let result= await sqlQuery(sqlStatement.selectUserNoteSQL, dataArr);
    // console.log(result);
    res.json(result);
}

exports.createUserNote = async function (req, res) {
    let dataArr = [
        req.user.user_id, 
        req.body.title, 
        req.body.language, 
        req.body.subject, 
        req.body.content
    ];
    // console.log(dataArr);
    await sqlQuery(sqlStatement.createUserNoteSql, dataArr);
    
    dataArr = [req.user.user_id]
    let result = await sqlQuery(sqlStatement.selectUserLastNoteSQL, dataArr);
    // console.log(result);
    res.json(result);
}

exports.updateUserNote = async function (req, res) {
    // console.log(req.body);
    let dataArr = [
        req.user.user_id, 
        req.params.id, 
        req.body.title, 
        req.body.language, 
        req.body.subject, 
        req.body.content
    ];
    await sqlQuery(sqlStatement.updateUserNoteSql, dataArr);

    dataArr = [
        req.user.user_id, 
        req.params.id
    ];
    let result= await sqlQuery(sqlStatement.selectUserNoteSQL, dataArr);

    res.json(result);
}

exports.deleteUserNote = async function (req, res) {
    let dataArr = [
        req.user.user_id, 
        req.params.id
    ];
    await sqlQuery(sqlStatement.deleteUserNote, dataArr);
    res.end(req.params.id);
}