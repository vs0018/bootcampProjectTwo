var db = require("../models");

module.exports = function(app) {
  app.get("api/allEvents", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  app.post("api/events", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Create a new user/attendee
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
