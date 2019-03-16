$(document).ready(function() {

  $(".unregisterBtn").on("click", function(event) {
    event.preventDefault();

    // alert("jquery's here!");


    var eventID = $(this).data("eventid");
    var userID = $(this).data("userid");

    console.log("event: " + eventID + ", " + "user: " + userID);
    
    unregister(eventID, userID);

  });



  function unregister(eventID, userID) {
    $.post("/api/unregister", {
      eventID,
      userID
    })
      .then(function (data) {
        // window.location.replace(data);
        if (data.status === "Success") {
          window.location = data.redirect;
      }
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(console.log(err));
  }


  


});
