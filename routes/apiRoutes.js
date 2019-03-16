var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  //EVENT ROUTES

  // GET route for returning all events
  app.get("/api/events/all", function (req, res) {
    db.Event.findAll({}).then(function (data) {
      console.log(data);
      res.json(data);
    });
  });


  app.post("/api/attendEvent", function (req, res) {
    db.EventAttendance.create({
      eventID: req.body.eventID,
      userID: req.body.userID
    })
      .then(function () {
        res.json({ status: "Success", redirect: "/myevents" });
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });



  // POST route for creating a new event
  app.post("/api/events/add", function (req, res) {

    // if (req.user) {
      console.log(req.body);
      // console.log("whATTTTTT");
      db.Event.create({
        eventName: req.body.eventName,
        eventDescription: req.body.desc,
        eventCity: req.body.city,
        eventState: req.body.state,
        eventZip: req.body.zip,
        eventPhoto: req.body.photo,
        eventLocationName: req.body.locationName 
      }).then(function (dbEvent) {
        // res.json(dbEvent);
        // res.redirect("/main");
        res.json({ status: "Success", redirect: "/home" });

      });

    // }
    // res.redirect("/signin");
  });

  // Chained routes by event name
  app
    .route("/api/events/:eventName")
    // GET routes for returning specific events based on search params
    .get(function (req, res) {
      db.Event.findAll({
        where: {
          eventName: req.params.name
        }
      }).then(function (dbEvent) {
        res.json(dbEvent);
      });
    });

  // Delete (Cancel) an event by id
  app.delete("/api/events/:id", function (req, res) {
    db.Event.destroy({
      where: {
        eventID: req.params.id
      }
    }).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  //ATTENDEE ROUTES

  // Chained routes for general api/attendee
  app
    .route("/api/attendee")
    // GET route for returning all users
    .get(function (req, res) {
      db.Attendee.findAll({}).then(function (dbUsers) {
        res.json(dbUsers);
      });
    })
    // POST route to create a new user/attendee
    .post(function (req, res) {
      db.Attendee.create(req.body).then(function (dbAttendee) {
        res.json(dbAttendee);
      });
    });

  app
    .route("/api/users/:userName")
    // GET route for returning a particular user's events
    .get(function (req, res) {
      db.Attendee.findAll({
        where: {
          $or: [
            {
              attendeeFirst: req.params.id,
              attendeeLast: req.params.id
            }
          ]
        }
      }).then(function (dbUser) {
        res.json(dbUser);
      });
    });

  //
  // P A S S P O R T routing
  //

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid signin credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/signin", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    // res.json("/index");
    res.json({ status: "Success", redirect: "/home" });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    // console.log(req.body);
    console.log("sign up clicked");
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    })
      .then(function () {
        // res.redirect("/signin");
        res.json({ status: "Success", redirect: "/signin" });
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
