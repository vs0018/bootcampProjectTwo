$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $(".signup");

  var inputEmail = $("#inputEmail");
  var inputPassword = $("#inputPassword");
  // var inputUserName = $("#inputUserName");
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
  $("#submitSignUp").on("click", function(event) {
    event.preventDefault();

    console.log(inputEmail.val().trim());
    console.log(inputPassword.val().trim());

    var userData = {
      inputEmail: inputEmail.val().trim(),
      inputPassword: inputPassword.val().trim()
      // inputUserName: inputUserName.val().trim(),
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

    if (!userData.inputEmail || !userData.inputPassword) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.inputEmail, userData.inputPassword);
    inputEmail.val("");
    inputPassword.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
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
