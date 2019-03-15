$(document).ready(function() {
  // alert("jquery's here!");

  // Getting references to our form and inputs
  var $submit = $("#submitSignIn");
  var email = $("#emailInput");
  var password = $("#passwordInput");

  // When the form is submitted, we validate there's an email and password entered
  // loginForm.on("submit", function (event) {
  $submit.on("click", function(event) {
    event.preventDefault();

    var userData = {
      email: email.val().trim(),
      password: password.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/signin", {
      email: email,
      password: password
    })
      .then(function(data) {
        // window.location.replace(data);
        if (data.status === "Success") {
          window.location = data.redirect;
        }        
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
