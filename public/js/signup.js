$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $(".signup");

  var email = $("#inputEmail");
  var password = $("#inputPassword");
  var username = $("#inputUserName");
  // var passConf = $("#passConf");
  // var inputFirstName = $("#inputFirstName");
  // var inputLastName = $("#inputLastName");
  // var inputAge = $("#inputAge");
  // var inputPhone = $("#inputPhone");
  // var inputCity = $("#inputCity");
  // var inputState = $("#inputState");
  // var inputZip = $("#inputZip");
  // var emergContact = $("#emergContact");
  // var emergNumber = $("#emergNumber");
  // var instagram = $("#instagram");
  // var facebook = $("#facebook");

  // When the signup button is clicked, we validate the email and password are not blank
  // signUpForm.on("submit", function(event) {
  $("body").on("click", "#submitSignUp", function(event) {
    event.preventDefault();

    var userData = {
      email: email.val().trim(),
      password: password.val().trim(),
      username: username.val().trim()
      // passConf: passConf.val().trim(),
      // inputFirstName: inputFirstName.val().trim(),
      // inputLastName: inputLastName.val().trim(),
      // inputAge: inputAge.val().trim(),
      // inputPhone: inputPhone.val().trim(),
      // inputCity: inputCity.val().trim(),
      // inputState: inputState.val().trim(),
      // inputZip: inputZip.val().trim(),
      // emergContact: emergContact.val().trim(),
      // emergNumber: emergNumber.val().trim(),
      // instagram: instagram.val().trim(),
      // facebook: facebook.val().trim()
    };

    // console.log(JSON.stringify(userData));

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.username);
    email.val("");
    password.val("");
    username.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, username) {
    $.post("/api/signup", {
      email: email,
      password: password,
      username: username
    })
      .then(function(data) {
        // window.location.replace(data);
        if (data.status === "Success") {
          window.location = data.redirect;
        }
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    // $("#alert .msg").text(err.responseJSON);
    // $("#alert").fadeIn(500);
    console.log(err);
  }
});
