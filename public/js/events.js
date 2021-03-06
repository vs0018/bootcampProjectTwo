// import { checkServerIdentity } from "tls";
$(function () {
  // Get references to page elements
  //BUTTONS
  var $goBtn = $("#goButton");
  var $submitBtn = $("#submit");

  //FORM ELEMENTS
  //From Create Page Fields
  var $city = $("#eventCity");
  var $state = $("#eventState");
  var $zip = $("#eventZip");
  var $fname = $("#userFirstName");
  var $lname = $("#userLastName");
  var $evName = $("#eventName");
  var $desc = $("#eventDesc");
  var $photo = $("#photoID");
  var $locationName = $("#locationName");



  //From Search Page Fields
  var $searchName = $("#searchName");
  var $searchUser = $("#searchUser");
  var $searchCity = $("#searchCity");
  var $searchState = $("#searchState");

  // The API object contains methods for each kind of request we'll make
  var API = {
    saveEvent: function (newEvent) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/events/add",
        data: JSON.stringify(newEvent),
        success: function (data) {
          console.log(data);
          window.location = data.redirect;
        },
        error: function () {
          // Uh oh, something went wrong
        }
      });
    },
    getAllEvents: function () {
      return $.ajax({
        url: "api/events/all",
        type: "GET"
      });
    },
    getOneEvent: function (param) {
      return $.ajax({
        url: "api/events/" + param, //need to define this below somewhere
        type: "GET"
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
      var eventsData = JSON.parse(data);
      return eventsData;
    });
  };

  var handleGoButtonClick = function (event) {
    event.preventDefault();

    var param = $(this).parent("div.input-group").find("input.searchName").val();
    console.log(param);

    API.getOneEvent(param).then(function (data) {
      let searchEventsArr = [];
      data.forEach(event => searchEventsArr.push(event.dataValues));
      return {
        events: searchEventsArr
      };
    });
  };

  // handleFormSubmit is called whenever we submit a new event
  // Save the new event to the db and refresh the list
  var handleFormSubmit = function (event) {
    event.preventDefault();

    var newEvent = {
      city: $city.val().trim(),
      state: $state.val().trim(),
      zip: $zip.val().trim(),
      userFname: $fname.val().trim(),
      userLname: $lname.val().trim(),
      eventName: $evName.val().trim(),
      desc: $desc.val().trim(),
      locationName: $locationName.val().trim()
    };


    if ($photo.val()) {
      newEvent.photo = $photo.val().trim();
    }

    // console.log(newEvent);

    API.saveEvent(newEvent);

    if (data.status === "Success") {
      window.location = data.redirect;
    }
    // .then(function () {
    //   refreshEvents();
    // });
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
  $goBtn.on("click", handleGoButtonClick);
});
