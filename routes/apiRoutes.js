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
  app.route("api/events/:evtName")
    // GET routes for returning specific events based on search params
    .get(function(req, res) {
      db.Event.findAll({
        where: {
          eventName: req.params.evtName
        }
      }).then(function(dbEvent) {
        res.json(dbEvent);
      });
    });

  // Delete (Cancel) an event by id
  app.delete("/api/events/:id", function(req, res) {
    db.Event.destroy({ 
        where: { 
          eventID: req.params.id 
        } 
      }).then(function(dbEvent) {
        res.json(dbEvent);
    });
  });

  //ATTENDEE ROUTES

  // Chained routes for general api/attendee
  app.route("api/attendee")
    // GET route for returning all users
    .get(function(req, res) {
      db.Attendee.findAll({}).then(function(dbUsers) {
        res.json(dbUsers);
      });
    })
    // POST route to create a new user/attendee
    .post(function(req, res) {
      db.Attendee.create(req.body).then(function(dbAttendee) {
        res.json(dbAttendee);
      });
    });

  app.route("api/users/:userName")
    // GET route for returning a particular user's events
    .get(function(req, res) {
      db.Attendee.findAll({
        where: {
          $or: [
            {
              attendeeFirst: req.params.id,
              attendeeLast: req.params.id
            }
          ]
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    })
};
