$(document).ready(function () {
  // alert("Ready!");



  // When the signup button is clicked, we validate the email and password are not blank
  // signUpForm.on("submit", function(event) {
  $('#registerForm').submit(function (event) {
    event.preventDefault();

    var username = $("#inputUsername").val().trim();
    var email = $("#inputEmail").val().trim();
    var password = $("#inputPassword").val().trim();
    var passwordConfirm = $("#inputPasswordConfirm").val().trim();

    if (password !== passwordConfirm) {
      alert("check password!");
      return;
    }

    if (!username || !email || !password || !passwordConfirm) {
      alert("Missing data!");
      return;
    }

    var userData = {
      username,
      email,
      password
    };


    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.email, userData.password);
    $("#inputUsername").val("");
    $("#inputEmail").val("");
    $("#inputPassword").val("");
    $("#inputPasswordConfirm").val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, email, password) {
    $.post("/api/register", {
      username,
      email,
      password
    })
      .then(function (data) {
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
    // alert("error");
    console.log(JSON.stringify(err));
    window.location.replace(err);

  }
});
