var Signup = document.getElementById("Signup");
var UserName = document.getElementById("UserName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var Signupsuccess = document.getElementById("Signupsuccess");

var usersList = [];

if (localStorage.getItem("users")) {
  usersList = JSON.parse(localStorage.getItem("users"));
} else {
  localStorage.setItem("users", JSON.stringify(usersList));
}
Signup.addEventListener("click", function () {
  if (validateUserName() && validateEmail() && Emailexists()) {
    password.classList.add("is-valid");
    var user = {
      UserName: UserName.value,
      email: email.value,
      password: password.value,
    };
    usersList.push(user);
    localStorage.setItem("users", JSON.stringify(usersList));
    updateFormValues();
    Signupsuccess.innerHTML="congratulations Signup successfuly Now you can "
  }
});

function updateFormValues() {
  UserName.value = "";
  email.value = "";
  password.value = "";
}
function validateUserName() {
  var regex = /^[A-Z][a-z]{1,}$/;
  var UserNameError = document.getElementById("UserNameError");
  if (regex.test(UserName.value)) {
    UserName.classList.add("is-valid");
    UserName.classList.remove("is-invalid");
    UserNameError.classList.add("d-none");
    return true;
  } else {
    UserName.classList.add("is-invalid");
    UserNameError.classList.remove("d-none");
    return false;
  }
}
function validateEmail() {
  var regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var EmailError = document.getElementById("EmailError");
  if (regex.test(email.value)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    EmailError.classList.add("d-none");
    return true;
  } else {
    email.classList.add("is-invalid");
    EmailError.classList.remove("d-none");
    return false;
  }
}
function Emailexists() {
  var EmailError = document.getElementById("EmailExistsError");
  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].email.toLowerCase() == email.value.toLowerCase()) {
      email.classList.add("is-invalid");
      EmailError.classList.remove("d-none");
      return false;
    }
  }
  email.classList.add("is-valid");
  email.classList.remove("is-invalid");
  EmailError.classList.add("d-none");
  return true;
}
