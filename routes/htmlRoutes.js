var db = require("../models");

module.exports = function(app) {
  // Load signin page
  app.get("/", function(req, res) {
    res.render("signin");
  });

  // Load user homepage
  app.get("/index", function(req, res) {
    res.render("index");
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
    db.Event.findAll({}).then(function(dbEvents) {
      res.render("search", {
        events: dbEvents
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
