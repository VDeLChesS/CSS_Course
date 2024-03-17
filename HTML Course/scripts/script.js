let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let experienceInputs = document.querySelectorAll('input[name="experience"]');
let country = document.getElementById("country");
let ai_experience = document.getElementById("ai_experience");
let terms = document.getElementById("terms");
let favcolor = document.getElementById("favcolor");
let file = document.getElementById("file");
let birthday = document.getElementById("birthday");

let experienceSelected = Array.from(experienceInputs).some((input) => input.c);

if (
  fullname.value &&
  password.value &&
  experienceSelected &&
  country.value &&
  ai_experience.value &&
  email.value &&
  favcolor.value &&
  file.value &&
  birthday.value
) {
  alert(
    `Congratulations ${fullname.value}! You have successfully submitted the form. We will get back to you shortly.`
  );
} else {
  alert(`Please fill in all the fields.`);
}

function updateTotal() {
  var price = parseFloat(document.getElementById("price").value);
  var quantity = parseFloat(document.getElementById("quantity").value);
  var total = price.toFixed(2) * quantity.toFixed(2);
  document.getElementById("total").value = "$" + total.toFixed(2);
}
