// Challenge 1

let specialButton = document.querySelector("#special-button");
specialButton.addEventListener("click", function () {
  alert("Hooray!");
});

// Challenge 2
let passForm = document.querySelector("#password-form");

passForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let passwordInput = document.querySelector("#password-input");
  let passwordValue = passwordInput.value;

  alert("Password: " + passwordValue);
});

// Challenge 3

let signForm = document.querySelector("#signup-form");

signForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let usernameInput = document.querySelector("#username-input");
  let usernameValue = usernameInput.value;

  let emailInput = document.querySelector("#email-input");
  let emailValue = emailInput.value;

  alert("Username: " + usernameValue + " & Email: " + emailValue);
});
