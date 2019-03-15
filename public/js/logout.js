$(document).ready(function () {
  // alert("jquery's here!");

  // Getting references to our form and inputs

  // When the form is submitted, we validate there's an email and password entered
  // loginForm.on("submit", function (event) {
  $("#logout").on("click", function (event) {
    event.preventDefault();

    // alert(emailInput.val());

    // If we have an email and password we run the loginUser function and clear the form
    logout(userData.email, userData.password);

  });





  function logout(event) {
    event.preventDefault();
    
    $.ajax('/logout', {
      method: 'DELETE',
      data: {}
    }).then(user => {
      $.removeCookie('auth_token');
      window.location.reload();
    })
  };
});
