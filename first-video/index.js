let users = [
  {
    name: "Ritik",
    age: 21
  },
  {
    name: "Rahul",
    age: 25
  },
  {
    name: "Aman",
    age: 20
  }
];

let inp = document.querySelector("input");
let container = document.querySelector("#container");

function showData(data){

    container.innerHTML = "";

    data.forEach((user)=>{

        container.innerHTML += `
          <h2>${user.name}</h2>
          <p>${user.age}</p>
          <hr>
        `;

    });

}

showData(users);

inp.addEventListener("change",(e)=>{

    let searchText = e.target.value.toLowerCase();

    let filteredUsers = users.filter((user)=>{

        return user.name.toLowerCase().includes(searchText);

    });

    showData(filteredUsers);

});