// Get references to page elements
var $submitBtn = $("#submit");
var $eventList = $("#event-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveEvent: function(event) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/events",
      data: JSON.stringify(event)
    });
  },
  getAllEvents: function() {
    return $.ajax({
      url: "api/events",
      type: "GET"
    });
  },
  getOneEvent: function(name) {
    return $.ajax({
      url: "api/events/" + name,
      type: "GET"
    });
  },
  deleteEvent: function(id) {
    return $.ajax({
      url: "api/events/" + id,
      type: "DELETE"
    });
  }
};

// refreshEvents gets new events from the db and repopulates the list
var refreshEvents = function() {
  API.getAllEvents().then(function(data) {
    var $events = data.map(function(event) {
      var $a = $("<a>")
        .text(event.eventDescription)
        .attr("href", "/events/" + event.eventId);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": event.eventId
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-success float-right join")
        .text(" join ");

      $li.append($button);

      return $li;
    });

    $eventList.empty();
    $eventList.append($events);
  });
};

// handleFormSubmit is called whenever we submit a new event
// Save the new event to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var event = {
    eventName: $exampleText.val().trim(),
    eventDescription: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveEvent(event).then(function() {
    refreshEvents();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $eventList.on("click", ".join", handleDeleteBtnClick);
