const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const client = require("./dbConnection");

const localStrategy = new LocalStrategy(
    {
        usernameField: "emailAddress",
        passwordField: "password"
    },
    async function (email, password, done) {
        try {
            console.log("localStrategy check 1");
            const sqlStatement = `SELECT * FROM "TB_users" WHERE email = $1`;
            let user = await client.query(sqlStatement, [email]);
            user = user.rows[0];
            console.log(user);
            if (user.length === 0) {
                console.log("localStrategy check 2");
                done(null, false, { message: "email not exist" });
            }
            // if (await bcrypt.compare(password, user.password)) {
            //     console.log("localStrategy check 3");
            //     done(null, user);
            // }
            if (password, user.password) {
                console.log("localStrategy check 3");
                done(null, user);
            }
            else {
                console.log("localStrategy check 4");
                done(null, false, { message: "password not correct" });
            }
        }
        catch (err) {
            console.log("localStrategy check 5");
            done(err);
        }
    }
);

const serializeUserCB = async function (user, done) {
    // console.log("serializeUserCB check 1");
    let authData = user.email
    // console.log(authData);
    done(null, authData);
}

const deserializeUserCB = async function (authData, done) {
    // console.log("deserializeUserCB check 1");
    try {
        // console.log("deserializeUserCB check 2");
        let sqlStatement = `SELECT * FROM "TB_users" WHERE email = $1`;
        let user = await client.query(sqlStatement, [authData]);
        user = user.rows[0];
        if (user.length === 0) {
            // console.log("deserializeUserCB check 3");
            return done(new Error("Wrong user email"));
        }
        // console.log("deserializeUserCB check 4");
        return done(null, user);
    }
    catch (err) {
        // console.log("deserializeUserCB check 5");
        return done(err);
    }
}

const authSetup = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use("local", localStrategy);
    passport.serializeUser(serializeUserCB);
    passport.deserializeUser(deserializeUserCB);
}

const isAuth = function (req, res, next) {
    // console.log("isAuth check 1");
    if (req.isAuthenticated()) {
        // console.log("isAuth check 2");
        next();
    }
    else {
        // console.log("isAuth check 3");
        res.redirect("/login");
    }
}

const cancelAuth = function(req, res) {
    req.logout();
    res.redirect("/login");
}

const authUser = function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
        console.log("authUser check 1");
        if (err) {
            console.log("authUser check 2");
            return next(err);
        }
        if (!user) {
            console.log("authUser check 3");
            return res.redirect("/login");
        }
        console.log("authUser check 4");
        req.login(user, function (err) {
            console.log("authUser check 5");
            if (err) {
                console.log(err);
                console.log("authUser check 6");
                return next(err);
            }
            console.log("authUser check 7");
            return res.redirect("/notes");
        })
    })(req, res, next);
}

module.exports.authSetup = authSetup;
module.exports.isAuth = isAuth;
module.exports.cancelAuth = cancelAuth;
module.exports.authUser = authUser;