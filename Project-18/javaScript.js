const btn = document.getElementById("btn");

const username = document.getElementById("username");
const lastname = document.getElementById("lastname");

let fullname = document.getElementById("fullname");
btn.addEventListener("click", () => {
  if (username.value != "" || lastname.value != "")
    fullname.innerText = `Full Name: ${username.value} ${lastname.value}`;
});
