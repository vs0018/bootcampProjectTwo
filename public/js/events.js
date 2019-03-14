// import { checkServerIdentity } from "tls";

// Get references to page elements
// var $submitBtn = $("#submit");
var $goBtn = $("#goButton");
var $city = $("#eventCity");
var $state = $("#eventState");


// The API object contains methods for each kind of request we'll make
var API = {
  saveEvent: function (event) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/events",
      data: JSON.stringify(event)
    });
  },
  getAllEvents: function () {
    return $.ajax({
      url: "api/events",
      type: "GET"
    });
  },
  getOneEvent: function (param) {
    return $.ajax({
      url: "api/events/" + param, //need to define this below somewhere
      type: "GET",
    });
  },
  deleteEvent: function (id) {
    return $.ajax({
      url: "api/events/" + id,
      type: "DELETE"
    });
  }
};

// eventsList gets all events from the db and repopulates the list
var eventsList = function () {
  API.getAllEvents().then(function (data) {
    var events = JSON.parse(data);
    return events;
  });
};

var handleGoButtonClick = function (event) {
  event.preventDefault();

  var list = eventsList();
  console.log(list)
}

// handleFormSubmit is called whenever we submit a new event
// Save the new event to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var event = {
    name: $exampleText.val().trim(),
    desc: $exampleDescription.val().trim(),
    // city: ,
    // state: ,
    // zip: 
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveEvent(event).then(function () {
    refreshEvents();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $eventList.on("click", ".join", handleDeleteBtnClick);
$goBtn.on("click", handleGoButtonClick);
