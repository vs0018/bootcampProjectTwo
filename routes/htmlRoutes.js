var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

var path = require("path");

module.exports = function(app) {
  // app.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/index");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

  app.get("/signin", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("signup");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/index", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("index");
  });

  // Load signin page
  app.get("/", function(req, res) {
    res.render("signin");
  });

  // Load signup page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Load create event page
  app.get("/addevent", function(req, res) {
    res.render("addEvents");
  });

  // Load search events page
  app.get("/search", function(req, res) {
    res.render("search", eventsList);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
