/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // a error of Js //
*/

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
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 **3  means 2 to the power of 3 = 2* 2* 2*

const firstName = "Umut";
const lastName = " Gün";
console.log(firstName + " " + lastName);

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
  "I'm " +
  " " +
  firstName +
  " , a " +
  (year - birthYear) +
  " " +
  "years old" +
  " " +
  job +
  "!";
console.log(umut);

const umutNew = `I'm ${firstName} , a ${year - birthYear} years old ${job}!`;
console.log(umutNew);

console.log(`Just a regular string...`);

console.log("String with \n multiple \n lines");

console.log(`String 
miltiple
lines`);
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

/*
// 5 falsy values: 0 , ' ' , undefined , null , NaN

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
