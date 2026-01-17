const text = document.querySelector("input");
const s = document.querySelector("span");

text.addEventListener("input", (e) => {
  const left = 20 - text.value.length;
  s.textContent = left;
  s.style.color = left < 0 ? "red" : "black";
});
