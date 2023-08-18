var firstname = document.getElementById("first_name");
var secondname = document.getElementById("second_name");
var email = document.getElementById("email");
var sub_button = document.getElementById("sub_button");
var email_output = document.getElementById("email_output");
var firname_output = document.getElementById("firname_output");
var secname_output = document.getElementById("secname_output");

function getfirst_name() {
  firname_output.innerHTML = firstname.value;
}
function getsecond_name() {
  secname_output.innerHTML = secondname.value;
}
function getemail() {
  email_output.innerHTML = email.value;
}

let user_details = document.getElementById("details_form");
user_details.addEventListener("submit", function (e) {
  // prevents the browser from refreshing
  e.preventDefault();
  let first_name = document.getElementById("first_name");
  let second_name = document.getElementById("second_name");
  let email = document.getElementById("email");

  if (
    first_name.value.length > 0 &&
    second_name.value.length > 0 &&
    email.value.length > 0
  ) {
    document.getElementById("suc_alertmes").innerText = "Succesfully Submited";
  } else {
    document.getElementById("err_alertmes").innerText =
      "ensure all fields are entered";
  }
});

// sub_button.addEventListener("click", getfirst_name);
// sub_button.addEventListener("click", getsecond_name);
// sub_button.addEventListener("click", getemail);
