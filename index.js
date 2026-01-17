let input = document.querySelectorAll("input");
let nameinput = input[0];
let email = input[1];
let password = input[2];
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameRegex = /^[A-Za-z ]{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let validName = nameRegex.test(nameinput.value);
  let validEmail = emailRegex.test(email.value);
  let validPassword = passwordRegex.test(password.value);

  document.querySelector("#name").style.display = "none";
  document.querySelector("#email").style.display = "none";
  document.querySelector("#password").style.display = "none";

  if (!validName) {
    document.querySelector("#name").style.display = "block";
    document.querySelector("#name").textContent = "User name is not correct";
  }

  if (!validEmail) {
    document.querySelector("#email").style.display = "block";
    document.querySelector("#email").textContent = "Email is not correct";
  }

  if (!validPassword) {
    document.querySelector("#password").style.display = "block";
    document.querySelector("#password").textContent = "Password is not correct";
  }

  if (validName && validEmail && validPassword) {
    let p = document.createElement("p");
    p.textContent = "Everything is fine";
    document.querySelector(".container").appendChild(p);
  }
});
