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
