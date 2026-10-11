
function findLongestName(...names) {
  if (names.length === 0) {
    console.log("Please enter at least one name");
    return;
  }

  if (names.length > 10) {
    console.log("This function only accepts 10 people");
    names = names.slice(0, 10); 
  }

  console.log(`Names: ${names.join(", ")}`);

  let longest = names[0];

  names.forEach(function (name) {
    if (name.length > longest.length) {
      longest = name;
    }
  });

  console.log(`Longest name: ${longest} (${longest.length} letters)`);
}

let input = prompt("Enter names separated by commas (e.g. Ala'a, Sarah, Hammam):") ?? "";

let list = input
  .split(",")
  .map(function (name) {
    return name.trim();
  })
  .filter(function (name) {
    return name !== "";
  });

findLongestName(...list);