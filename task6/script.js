
let users = [];
for (let i = 0; i < 20; i++) {
  users.push({
    name: `User ${i + 1}`,
    email: `user${i + 1}@gmail.com`,
    type: Math.random() > 0.7 ? "admin" : "user",
  });
} 

let usersCount = 0;
let adminsCount = 0;
users.forEach((user) => {
  if (user.type === "admin") {
    adminsCount++;
  } else {
    usersCount++;
  }
});

// console.log(users);
console.log(`Users count: ${usersCount}`);
console.log(`Admins count: ${adminsCount}`);