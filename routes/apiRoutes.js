var db = require("../models");

module.exports = function(app) {
  //EVENT ROUTES
  // Chained routes for general api/event
  app.route("api/events")
    // GET route for returning all events
    .get(function(req, res) {
      db.Event.findAll({}).then(function(dbEvents) {
        res.json(dbEvents);
      });
    })
    // POST route for creating a new event
    .post("api/events", function(req, res) {
      db.Event.create(req.body).then(function(dbEvent) {
        res.json(dbEvent);
      });
    });

  // Chained routes by event name
  app.route("api/events/:name")
    // GET routes for returning specific events based on search params
    .get(function(req, res) {
      db.Event.findAll({
        where: {
          name: req.params.name
        }
      }).then(function(dbEvent) {
        res.json(dbEvent);
      });
    });

  // Delete an event by id
  app.delete("/api/events/:id", function(req, res) {
    db.Event.destroy({ where: { id: req.params.id } }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  //ATTENDEE ROUTES
  // Chained routes for general api/attendee
  app.route("api/attendee")
    // POST route to create a new user/attendee
    .post(function(req, res) {
      db.Attendee.create(req.body).then(function(dbAttendee) {
        res.json(dbAttendee);
      });
    });
};
