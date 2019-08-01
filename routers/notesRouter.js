"use strict"
const noteRouter = require("express").Router();
const notesHandler = require("../handlers/notesHandler");

noteRouter.get("/", notesHandler.readUserAllNotes);
noteRouter.get("/:id", notesHandler.readUserNote);
noteRouter.post("/", notesHandler.createUserNote);
noteRouter.put("/:id", notesHandler.updateUserNote);
noteRouter.delete("/:id", notesHandler.deleteUserNote);

module.exports = noteRouter;