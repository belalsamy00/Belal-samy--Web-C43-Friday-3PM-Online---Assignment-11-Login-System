var Signin = document.getElementById("Signin");
var email = document.getElementById("email");
var password = document.getElementById("password");

var usersList = [];

if (localStorage.getItem("users")) {
  usersList = JSON.parse(localStorage.getItem("users"));
} else {
  localStorage.setItem("users", JSON.stringify(usersList));
}
if (localStorage.getItem("sessionEmail")) {
  window.location.href = "welcome.html";
}

Signin.addEventListener("click", function () {
  if ( validateEmail() && UserSerch()) {
    window.location.href = "welcome.html";
  }
});

function updateFormValues() {
  email.value = "";
  password.value = "";
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
function UserSerch() {
  var EmailError = document.getElementById("EmailExistsError");
  var passwordError = document.getElementById("passwordError");
  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].email.toLowerCase() == email.value.toLowerCase()) {
      if (usersList[i].password === password.value) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        EmailError.classList.add("d-none");
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        passwordError.classList.add("d-none");
        localStorage.setItem("sessionEmail", JSON.stringify(usersList[i].email));
        return true;
      }else{
        password.classList.add("is-invalid");
        passwordError.classList.remove("d-none");
        return false;
      }
    }
  }
  email.classList.add("is-invalid");
  EmailError.classList.remove("d-none");
  return false;
}
