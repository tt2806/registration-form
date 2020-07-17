function ValidationForm() {
  let username = document.forms["RegForm"] ["Name"];
  let email = document.forms["RegForm"] ["Email"];
  let phoneNumber = document.forms["RegForm"] ["Telephone"];
  let pass = document.forms["RegForm"] ["Password"];
  if (username.value == "") {
    alert("Please enter your name.");
    username.focus();
    return false;
  }
  if (email.value == "") {
    alert("Please enter a valid email address.")
    email.focus();
    return false;
  }
  if (phoneNumber.value = "") {
    alert("Please enter your telephone number.")
    phoneNumber.focus();
    return false;
    }
    if (pass.value == "") {
        alert("Please enter your password.")
        pass.focus();
        return false;
    }
    return true;
}

document.getElementById("email-hotmail").addEventListener("click", () => {
    document.getElementById("E-mail").value += "@hotmail.com";
});

document.getElementById("email-icloud").addEventListener("click", () => {
    document.getElementById("E-mail").value += "@icloud.com";
});

document.getElementById("email-gmail").addEventListener("click", () => {
    document.getElementById("E-mail").value += "@gmail.com";
});

document.getElementById("email-outlook").addEventListener("click", () => {
    document.getElementById("E-mail").value += "@outlook.com";
});
