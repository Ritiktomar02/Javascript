const data = [
 { name: "simran", age: 20 },
 { name: "alex", age: 25 },
 { name: "justin", age: 22 }
];

// Q1: Return a new array where age > 20
// Q2: Add a new key "gender" to each object
// Q3: If age === 20 → gender = "female", else "male"

const new_array=data.filter((item)=>item.age>20);
console.log(new_array)

data.forEach((item)=>{
    if(item.age===20){
        item.gender="female"
    }else{
        item.gender="male"
    }
})

console.log(data)

let x=10;
let y=x;

y+=20;
console.log(y,x)

let a=[1,2,3]
let b=a;
b.push(4)

console.log(a)