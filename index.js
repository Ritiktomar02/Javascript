let form = document.querySelector(".formtag");
let fields = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let div = document.createElement("div");

  let p1 = document.createElement("p");
  p1.textContent = `Name: ${fields[0].value}`;

  let p2 = document.createElement("p");
  p2.textContent = `Email: ${fields[1].value}`;

  let p3 = document.createElement("p");
  p3.textContent = `Description: ${fields[2].value}`;

  let p4 = document.createElement("p");
  p4.textContent = `Age: ${fields[3].value}`;

  div.append(p1, p2, p3, p4);
  document.body.appendChild(div);

  // Optional: clear form after submit
  form.reset();
});
