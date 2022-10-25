// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends[0]);

// const years = new Array(2000, 2001, 2002, 2003);

// const sang = ["Sang", "Duong ", 2022 - 2003, " student", friends];
// console.log(sang);
// console.log(sang.length);

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Sang");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Duong");
// console.log(friends);

// friends.pop();
// console.log(friends);
// console.log(friends.indexOf("Steven"));

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["lastName"]);
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);
