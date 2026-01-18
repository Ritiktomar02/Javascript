const addbtn = document.querySelector("#addNoteBtn");
const noteform = document.querySelector(".note-form");
const cancel = document.querySelector(".cancel");

const heading = document.querySelector(".note-form input");
const content = document.querySelector(".note-form textarea");
const save = document.querySelector(".save");
const notes = document.querySelector(".notes-container");

// show form
addbtn.addEventListener("click", () => {
  noteform.style.display = "block";
});

// hide form
cancel.addEventListener("click", () => {
  noteform.style.display = "none";
});

// save to localStorage
function savetoLocalstorage(obj) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(obj);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// save note
save.addEventListener("click", (e) => {
  e.preventDefault();

  let new_heading = heading.value.trim();
  let new_content = content.value.trim();

  if (new_heading === "") {
    alert("Please fill the heading");
    return;
  }

  if (new_content === "") {
    alert("Please fill the content");
    return;
  }

 savetoLocalstorage({
  id: Date.now(), // unique id
  heading: new_heading,
  content: new_content
});

  heading.value = "";
  content.value = "";
  noteform.style.display = "none";

  showcards(); // re-render notes
});

// render notes
function showcards() {
  notes.innerHTML = "";

  let oldtasks = JSON.parse(localStorage.getItem("tasks")) || [];

  oldtasks.forEach((item) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const delBtn = document.createElement("button");

    h3.textContent = item.heading;
    p.textContent = item.content;

    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    delBtn.setAttribute("data-id", item.id);

    // delete handler
    delBtn.addEventListener("click", () => {
      deleteNote(item.id);
    });

    div.classList.add("note-card");
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(delBtn);

    notes.appendChild(div);
  });
}
function deleteNote(id) {
  let oldtasks = JSON.parse(localStorage.getItem("tasks")) || [];

  let updatedTasks = oldtasks.filter(task => task.id !== id);

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  showcards(); // re-render UI
}


// load notes on page load
showcards();
