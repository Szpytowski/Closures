"use strict";

// 1
// function have to return the formula
// the values could be overwritten with new objects
// getdelta already has its values a: 1, b:2, c:3,) where we eventually can change the values and it will still work
// getdeltafunction has to have objects assigned to it, if not it will not work Nan



function getDeltaFunction(defaultValues) {
  return function (newValues = {}) {
    const a = newValues.a ?? defaultValues.a;
    const b = newValues.b ?? defaultValues.b;
    const c = newValues.c ?? defaultValues.c;

    if (a === undefined || b === undefined || c === undefined) {
      return NaN;
    }

    return b * b - 4 * a * c;
  };
}

// 10
function executeAfterFiveSeconds(functionToCall) {
  setTimeout(functionToCall, 5000);
}

function sayHello() {
  console.log('Hello!');
}

executeAfterFiveSeconds(sayHello);

// 11
/*
function getRandomIntegerGenerator(min, max) {
  return function generateRandomNumber (number) {
    return Math.floor(Math.random(number) * (max - min)) + min;
  };
}

const getRandomDigit = getRandomIntegerGenerator(0, 9);
getRandomDigit(); // random number between 0 and 9

console.log(getRandomIntegerGenerator(-10, 10)()); // random number between -10 and 10
*/

// 13
// return a function
// take a random character from a string
function getRandomCharacterGenerator(string) {
  return function() {
    const randomCharacter = Math.floor(Math.random()*string.length);
    return string[randomCharacter];
  };
}

const getRandomDigit = getRandomCharacterGenerator('0123456789');

console.log(getRandomDigit());

const getRandomABC = getRandomCharacterGenerator('abcABC');
console.log(getRandomABC());

// 14
function getPrefixedStringGenerator(prefix) {
  return function(str) {
    return prefix + str;
  };
}

const prefixStringWithMister = getPrefixedStringGenerator('Mr.');
console.log(prefixStringWithMister(' John')); // Mr. John
console.log(prefixStringWithMister(' Adam')); // Mr. Adam

const prefixStringWithMiss = getPrefixedStringGenerator('Ms.');
console.log(prefixStringWithMiss(' Kate')); // Ms. Kate
console.log(prefixStringWithMiss(' Julie')); // Ms. Julie

const prefixStringWithNegative = getPrefixedStringGenerator('un');
console.log(prefixStringWithNegative('happy')); // unhappy
console.log(prefixStringWithNegative('productive')); // unproductive
console.log(prefixStringWithNegative('fair')); // unfair

