var UserName = document.getElementById("UserName");

var usersList = [];

if (localStorage.getItem("users")) {
  usersList = JSON.parse(localStorage.getItem("users"));
  if (localStorage.getItem("sessionEmail")) {
    sessionEmail = JSON.parse(localStorage.getItem("sessionEmail"));

    for (var i = 0; i < usersList.length; i++) {
      if (usersList[i].email.toLowerCase() == sessionEmail.toLowerCase()) {
        UserName.innerHTML = usersList[i].UserName;
      }
    }
  } else {
    window.location.href = "index.html";
  }
} else {
  window.location.href = "index.html";
}
function logout() {
  localStorage.removeItem("sessionEmail");
  window.location.href = "index.html";
}
