var form2 = document.getElementById("form");

if (form2) {
  form2.addEventListener("submit", (e) => {
    e.preventDefault();

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var username = document.getElementById("username");

    if (email.value && password.value && username.value) {
      alert(
        `Successfully created account under the username ${username.value} with the email ${email.value}`
      );
    } else {
      alert("Please fill in all fields.");
    }
  });
}
