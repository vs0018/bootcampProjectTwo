var db = require("../models");

module.exports = function(app) {
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
    res.render("addevent");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
