var db = require("../models");

module.exports = function(app) {
  // GET route for returning all events
  app.get("api/events", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // GET route for returning events of a specific type
  app.get("/api/events/category/:category", function(req, res) {
    db.Event.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for creating a new event
  app.post("api/events", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // POST route to create a new user/attendee
  app.post("/api/attendee", function(req, res) {
    db.Attendee.create(req.body).then(function(dbAttendee) {
      res.json(dbAttendee);
    });
  });

  // Delete an event by id
  app.delete("/api/events/:id", function(req, res) {
    db.Event.destroy({ where: { id: req.params.id } }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });
};
