const data = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "Supabase",
  "REST API",
  "GraphQL",
  "JWT Authentication",
  "OAuth",
  "Socket.IO",
  "WebSockets",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud",
  "Linux",
  "Git",
  "GitHub",
  "CI/CD",
  "Jenkins",
  "System Design",
  "Data Structures",
  "Algorithms",
  "LeetCode",
  "GeeksForGeeks",
  "C",
  "C++",
  "Java",
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "Machine Learning",
  "Deep Learning",
  "AI",
  "OpenAI API",
  "Microservices"
];

const list = document.querySelector("#list");

function renderItems(items) {
  list.innerHTML = ""; // clear old UI

  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = item;
    list.appendChild(div);
  });
}
renderItems(data);


let inputText = document.querySelector("input");

inputText.addEventListener("input", (e) => {
  let searchValue = e.target.value.toLowerCase();

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchValue)
  );

  renderItems(filteredData);
});

