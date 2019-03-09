var db = require("../models");

module.exports = function(app) {
  // Load signin page
  app.get("/", function(req, res) {
    res.render("signup");
  });

  // Load signup page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
