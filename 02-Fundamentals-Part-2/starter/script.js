"use strict";

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

//const interFace="Audio"
//const private="534"
*/
/*
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//console.log(fruitProcessor(5, 0)); // directly without a variable

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// !Function Decleration
/////////////////
function calcAge1(birthYear) {
  const age = 2024 - birthYear;
  return age;
}

const ageUmut = calcAge1(1998);
console.log(ageUmut);

///////////////////
function calcAge10(birthYear) {
  return 2024 - birthYear;
}

const ageFatos = calcAge10(1975);
console.log(ageFatos);

// ! Function Expression

const calcAge100 = function (birthYear) {
  return 2024 - birthYear;
};

const ageBerra = calcAge100(2000);
console.log(ageBerra);
*/
/*
// ! Arrow Function
const calcAge1000 = (birthYear) => 2024 - birthYear;

const ageBerfin = calcAge1000(2000);
console.log(ageBerfin);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years!`;
};

const retirementUmut = yearsUntilRetirement(1998, "Umut");
console.log(retirementUmut);
*/

/*
// ! Calling another Function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

console.log(fruitProcessor(2, 4));
*/

/*
// ! Review
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years!`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  //return retirement;
};

const retirementUmut = yearsUntilRetirement(1998, "Umut");
console.log(retirementUmut);
*/

/*
function logger() {
  console.log("Hey! My name is Umut...");
  console.log("Hey! My name is Umut...");
  console.log("Hey! My name is Umut...");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);

function taschenRechner(zahlOne, zahlTwo) {
  const plus = zahlOne + zahlTwo;
  return plus;
}

const dataOne = taschenRechner(13, 6);
console.log(dataOne);
*/

/*
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const ageUmut = calcAge1(1998);
console.log(ageUmut);

*/

/*
//FUNCTION DECLERATION
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1998);

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);


// ARROW FUNCTION
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1998, "Umut"));

*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));

/*
// Versuch 
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, mangos) {
  const applePieces = cutFruitPieces(apples);
  const mangoPieces = cutFruitPieces(mangos);
  const juice = `Juice with ${applePieces} pieces of apple and ${mangoPieces} pieces of Mango `;
  return juice;
}

console.log(fruitProcessor(2, 5));
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
*/

/*
// ! CHALLENGES

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgKoalas, avgDolphins) {
  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} to ${avgDolphins} `);
  } else if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} to ${avgKoalas} `);
  } else {
    console.log(`Nobody is the Winner`);
  }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));
*/

// ! FUNCTIONS
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

let info = describeCountry("Turkey", 80, "Ankara");
console.log(info);
*/

// ! FUNCTION DECLERATION
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const popTurkey = percentageOfWorld1(80);
console.log(popTurkey);


// ! FUNCTION EXPRESSION
const percentageOfWolrd2 = function (population) {
  return (population / 7900) * 100;
};

const popGermany = percentageOfWolrd2(90);
console.log(popGermany);
*/

// ! ARROW FUNCTION
/*
const percentageOfWolrd3 = (population) => (population / 7900) * 100;

const popSomewhere = percentageOfWolrd3(60);
console.log(popSomewhere);
*/

// ! CALLING OTHER FUNCTIONS
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage} of the world ! `;
  console.log(description);
};

describePopulation("Turkey", 80);
*/

/*  -------------------------------- */
/*           //! ARRAYS              */
/* --------------------------------- */
/*
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Umut";
const jonas = [firstName, "Can", 2024 - 1998, "teacher", friends];
console.log(jonas);
console.log(jonas.length);
//const years = new Array(1991, 1984, 2008, 2020);

// Exercise

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/

/*
const friends = ["Micheal", "Steven", "Peter"];

//Add elements
const newLength = friends.push("Jay");
console.log(friends); // Last
console.log(newLength);

friends.unshift("John"); // First
console.log(friends);

//Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

// ************

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

/*
// ! CHALLENGE 2

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const total = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];
console.log(total);

//console.log(calcTip(100));
*/

/* ---------------------------------- */
/*            // ! OBJECTS            */
/* ---------------------------------- */

/*
const umutArray = [
  "umut",
  "Gun",
  2024 - 1998,
  "Developer",
  ["Steven", "Eleni", "Marco"],
];

const umut = {
  firstName: "umut",
  lastName: "Gun",
  age: 2024 - 1998,
  job: "Developer",
  friends: ["Steven", "Eleni", "Marco"],
};
*/

/*
const umut = {
  firstName: "umut",
  lastName: "Gun",
  age: 2024 - 1998,
  job: "Developer",
  friends: ["Steven", "Eleni", "Marco"],
};

console.log(umut);

console.log(umut.lastName);
console.log(umut["lastName"]);

const nameKey = "Name";
console.log(umut["first" + nameKey]);
console.log(umut["last" + nameKey]);

const interestedIn = prompt(
  "What do you wamt to know about umut ? Choose between firstName, lastName, age, job and friends "
);
console.log(umut[interestedIn]);

if (umut[interestedIn]) {
  console.log(umut[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends "
  );
}

umut.location = "Germany";
umut["twitter"] = "ucangun";
console.log(umut);

// ! CHALLENGE

console.log(
  `${umut.firstName} has ${umut.friends.length} friends and his best friend is called ${umut.friends[0]}`
);
*/

/*
const umut = {
  firstName: "umut",
  lastName: "Gun",
  birthYear: 1998,
  job: "Developer",
  friends: ["Steven", "Eleni", "Marco"],
  hasDriverLicence: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    } and he has ${this.hasDriverLicence ? "a" : "no"} driver's licence `;
  },
};

console.log(umut.calcAge());

console.log(umut.age);
console.log(umut.age);
console.log(umut.age);

// console.log(umut.calcAge(1998));
//console.log(umut["calcAge"](1998));

// ! CHALLENGE

console.log(umut.getSummary());
*/

// ! CHALLENGE 3

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

Mark.calcBMI();
John.calcBMI();

console.log(
  John.calcBMI() > Mark.calcBMI
    ? `${John.fullName}'s ${John.BMI} BMI is higher than ${Mark.fullName}'s ${Mark.BMI} BMI `
    : `${Mark.fullName}'s ${Mark.BMI} BMI is higher than ${John.fullName}'s ${John.BMI} BMI`
);
