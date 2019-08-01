"use strict"
const apiRouter = require("express").Router();
const apiHandler = require("../handlers/apiHandler");

apiRouter.get("/languages", apiHandler.getLanguageList);
apiRouter.get("/subjects", apiHandler.getSubjectList);

module.exports = apiRouter;