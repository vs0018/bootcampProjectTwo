var mysql = require("mysql");

var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


// var config = db.sequelize.config;


// console.log(config);

// var connection = mysql.createConnection(config);

var path = require("path");



module.exports = function (app) {

  app.get("/signin", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.render("home");
      // return res.render("index");
    }
    res.render("signin");
  });





  app.get("/home", function (req, res) {

    if (req.user) {

      return db.Event.findAll({}).then(function (data) {

        let allEventsArr = [];

        data.forEach(event => allEventsArr.push(event.dataValues));

        return res.render("home", {
          events: allEventsArr,
          user: req.user
        });
      });


    }
    res.render("signin");

  });



  app.get("/myevents", function (req, res) {

    if (req.user) {

      return db.Event.findAll({
        include: [{model: db.User, where: {
          userID: req.user.userID
        } }]
        // attributes: ['eventDescription', 'eventName', 'eventID', 'eventPhoto'],
     
      }).then(function (data) {

        let myEventsArr = [];

        data.forEach(event => myEventsArr.push(event.dataValues));

        return res.render("myevents", {
          events: myEventsArr,
          user: req.user
        });
      });



    }

    res.render("signin");

  });



  // Load signin page
  app.get("/", function (req, res) {
    if (req.user) {
      return res.redirect("/home");
      // return res.render("index");
    }
    res.render("signin");
  });

  // Load signup page
  app.get("/signup", function (req, res) {
    if (req.user) {
      return res.render("home");
    }

    res.render("signup");
  });

  // Load create event page
  app.get("/addevent", function (req, res) {
    if (req.user) {
      return res.render("addevents");
    }
    res.render("signin");
  });

  // Load search events page
  app.get("/search", function (req, res) {
    if (req.user) {
      return res.render("search", { username: req.user.username });
    }
    res.render("signin");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    if (req.user) {
      return res.render("home");
    }
    res.render("404");
  });
};
