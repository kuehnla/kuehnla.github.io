const pass = document.querySelector("#user_password");
const passConfirm = document.querySelector("#user_confirm");
const submit = document.querySelector("#submit");
submit.addEventListener("click", () => check(pass, passConfirm));

function check(pass, passConfirm) {
  let valid = true;

  if (pass.checkValidity() && pass.value == passConfirm.value) {
    pass.removeAttribute("border");
    const nomatch = document.querySelector("#nomatch");
    nomatch.textContent = "";
  } else if (!pass.checkValidity()) {
    const nomatch = document.querySelector("#nomatch");
    pass.setAttribute("border", "border: 1px solid red;");
    nomatch.textContent = "* Please enter a password between 8-20 characters"
    valid = false;
  } else if (pass.value != passConfirm.value) {
    pass.setAttribute("border", "border: 1px solid red;");
    const nomatch = document.querySelector("#nomatch");
    nomatch.textContent = "* Passwords do not match";
    valid = false;
  }

  const fields = document.getElementsByTagName("input");
  for (let i = 0; i < fields.length; ++i) {
    if (fields[i].id == "user_password" || fields[i].id == "user_confirm") continue;
    const errorMsg = document.querySelector("." + fields[i].id);
    if (!fields[i].checkValidity()) {
      console.log(fields[i]);
      valid = false;
      console.log(fields[i].id)
      errorMsg.textContent = "* Please enter a valid " + fields[i].id.replace("_", " ");
    } else {
      const errorMsg = document.querySelector("." + fields[i].id);
      errorMsg.textContent = "";
    }
  }
  if (valid) {
    document.forms["form"].reset();
  }
}