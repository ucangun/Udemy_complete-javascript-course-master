// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);

// // firstNamePerson;
// // first_name_person;
// // $function;
// // firstName;

// //Assignment 1

// let country = "Deutschland";
// let continent = "Europa";
// let population = "80.000.000";

// console.log(country, continent, population);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Umut");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// // year = 1991;
// console.log(typeof year);

// console.log(typeof null); // a error of Js //

// let isIsland = false;
// let language;

// console.log(typeof isIsland, language);
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1190;
//const job;

var job = "programmer";
job = "teacher";

lastName = "Gün";
console.log(lastName);
*/
/*
// Math Operators
const now = 2039;
const ageJonas = now - 1998;
const ageSarah = now - 2019;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 4);
// 2 **3  means 2 to the power of 3 = 2* 2* 2*

const firstName = "Umut";
const lastName = " Gün";
console.log(firstName + "" + lastName);

// Asignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x +1
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // > , < , >= , <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// console.log(BMIJohn, BMIMark);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

/*
//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
const firstName = "Umut";
const job = "Programier";
const birthYear = 1998;
const year = 2024;

const umut =
  "Hey" +
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " years old " +
  job +
  " !";

console.log(umut);

const umutNew = `'I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(umutNew);

console.log(`Fener \n\Bahce`);

console.log(`Fener
Bahce 
cok 
yasa`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/*
const age = 19;
//const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
let century;
const birthYear = 1991;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  console.log(`Mark's (${BMIMark}) BMI is higher than John's (${BMIJohn}) !`);
} else {
  console.log(`John's (${BMIJohn}) BMI is higher than Mark's (${BMIMark}) !`);
}
*/

/*
//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

if (BMIMark > BMIJohn) {
  console.log(`Mark's ${BMIMark} BMI is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's (${BMIJohn}) BMI is higher than Mark's (${BMIMark})!`);
}
*/

/*
// type vonversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(inputYear);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log(" I am " + 23 + " years old ");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

// 5 falsy values: 0 , ' ' , undefined , null , NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Umut"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

if (money) {
  console.log("Dont spend it at all!");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined!");
}
*/

/*
const age = 18;
if (age === 18) console.log("You just became an adult!"); // srtict

if (age == 18) console.log("You just became an adult!"); // loose

const favourite = Number(prompt("What is your fovorite number?"));
console.log(favourite);

if (favourite === 23) {
  console.log("Cool ! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is a also cool number");
} else if (favourite === 9) {
  console.log("9 is a also cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}
*/
/*
const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

if (hasDriversLicence && hasGoodVision) {
  console.log("Sarah is able to drive !");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicence || hasGoodVision || isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive !");
} else {
  console.log("Someone else should drive...");
}
*/

// NUMBER ONE //

/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolpins are the Winner!");
} else if (scoreDolphins === scoreKoalas) {
  console.log("DRAW!");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas are the Winner!");
}
*/

// NUMBER TWO //

/*
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins, scoreKoalas);

if ((scoreDolphins && scoreKoalas) >= 100 && scoreDolphins > scoreKoalas) {
  console.log(" Dolphins are the Winner!");
} else if (
  (scoreDolphins && scoreKoalas) >= 100 &&
  scoreKoalas > scoreDolphins
) {
  console.log("Koalas are the Winner!");
} else if (scoreDolphins === scoreKoalas) {
  console.log("DRAW!");
}
*/

/*
// NUMBER THREE //

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if ((scoreDolphins && scoreKoalas) >= 100 && scoreDolphins > scoreKoalas) {
  console.log(" Dolphins are the Winner!");
} else if (
  (scoreDolphins && scoreKoalas) >= 100 &&
  scoreKoalas > scoreDolphins
) {
  console.log("Koalas are the Winner!");
} else if (
  (scoreDolphins && scoreKoalas) >= 100 &&
  scoreDolphins === scoreKoalas
) {
  console.log("DRAW!");
} else {
  console.log("No one wins the trophy");
}
*/

// CHALLENGE 3
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreKoalas, scoreDolphins);

if (scoreDolphins > scoreKoalas) {
  console.log("Winner is Dolphins");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both of them are Winner!");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Winner is Koalas!");
}
*/

//BONUS 1

/*
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreKoalas, scoreDolphins);

if ((scoreDolphins && scoreKoalas) >= 100 && scoreDolphins > scoreKoalas) {
  console.log("Winner is Dolphins");
} else if (
  (scoreKoalas && scoreDolphins) >= 100 &&
  scoreKoalas > scoreDolphins
) {
  console.log("Winner is Koalas");
} else if (scoreDolphins === scoreKoalas) {
  console.log("DRAW!");
}
*/

//BONUS 2
/*
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreKoalas, scoreDolphins);

if ((scoreDolphins && scoreKoalas) >= 100 && scoreDolphins > scoreKoalas) {
  console.log("Winner is dolphins");
} else if (
  (scoreDolphins && scoreKoalas) >= 100 &&
  scoreKoalas > scoreDolphins
) {
  console.log("Winner is Koalas");
} else if (
  (scoreDolphins && scoreKoalas) >= 100 &&
  scoreDolphins === scoreKoalas
) {
  console.log("DRAW!");
} else {
  console.log("Nobody is the Winner!");
}
*/
/*
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record video");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log(`Plan course structure \n\Go to coding meetup`);
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record video");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}
*/
/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/
/*
// CHALLENGE 4//

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill} , the tip was ${tip} and the final value ${bill + tip} `
);
*/

/*
// CHALLENGE 4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(tip);

console.log(
  `The Bill was ${bill}, the Tip was ${tip} and the total value is ${
    bill + tip
  } `
);
*/

// CHALLENGES

/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have? ")
);

if (numNeighbours === 1) {
  console.log("Only 1 Border");
} else if (numNeighbours > 1) {
  console.log(`${numNeighbours} neighbours`);
} else {
  console.log("No Borders");
}
*/

//

/*
const language = "english";
const population = 50;
const island = false;

if (language === "english" && population <= 50 && !island) {
  console.log("You should live in Portugal");
} else {
  console.log("Portugal does not meet your criteria");
}

console.log(!island);
*/

//

/*
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/

/*
const country = "Türkei";
population = 80;

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
*/
