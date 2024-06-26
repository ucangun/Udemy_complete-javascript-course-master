// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/
//***********************************************/
/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: +prompt("Degrees Celcius"),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 23, 0, 4];

const data = data1.concat(data2);

const printForecast = function (arr) {
  let str = " ";
  for (let i = 0; i < arr.length; i++)
    str = str + ` Max temperature is ${arr[i]} C in ${i + 1} days.`;
  console.log(str);
};
printForecast(data);
