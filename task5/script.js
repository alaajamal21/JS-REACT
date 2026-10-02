
let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));

let user = {
  name: name,
  age: age,
  hasAccess: age > 20 ? true : false
};

console.log("Name: " + user.name);
console.log("Age: " + user.age);
console.log(
    user.hasAccess
        ? "Access Granted"
        : "Access Denied"
);