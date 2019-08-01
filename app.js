"use strict"
const path = require("path");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ejsLayout = require("express-ejs-layouts");
const auth = require("./authentication");
require("dotenv").config();

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.set("layout", "layouts/layout.ejs");    // set default layout.
app.use(ejsLayout);

const sessionOptions = {
    resave: true, 
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session(sessionOptions));
auth.authSetup(app)

const signupRouter = require("./routers/SignupRouter");
const loginRouter = require("./routers/loginRouter");
const notesRouter = require("./routers/notesRouter")
const apiRouter = require("./routers/apiRouter")

app.use("/", loginRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/logout", auth.cancelAuth);
app.use("/notes", auth.isAuth, notesRouter);
app.use("/api", auth.isAuth, apiRouter);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.redirect("/login");
});

const port = process.env.WEB_PORT;
const hostname = process.env.WEB_HOSTNAME;
app.listen(port, hostname, function() {
    console.log(`The ${hostname} server listeing port ${port}.`);
});