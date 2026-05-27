// Week 7 – Functions Practice

function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(greet("Ignacio"));
console.log(add(5, 7));
console.log(multiply(3, 4));

//rectangle area function
function rectangleArea(width, height) {
  return width * height;
}

console.log(rectangleArea(5, 10)); // 50

//even number check function
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

//convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(20)); // 68  
 
//number max of 2 
function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxOfTwo(10, 7)); // 10

// number max of 3

function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(3, 9, 4)); // 9

//start with vowel check function
function startsWithVowel(str) {
  const firstChar = str.charAt(0).toLowerCase();
  return ['a', 'e', 'i', 'o', 'u'].includes(firstChar);
}
console.log(startsWithVowel("Apple")); // true
console.log(startsWithVowel("banana")); // false

//sum of array function
function sumArray(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4])); // 10

//max of array function 
function maxInArray(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(maxInArray([3, 9, 2, 7])); // 9

//count words in string function
function countWord(words, target) {
  let count = 0;
  for (let word of words) {
    if (word === target) {
      count++;
    }
  }
  return count;
}

console.log(countWord(["dog", "cat", "dog", "bird"], "dog")); // 2

// even numbers in array function
function filterEvens(numbers) {
  const result = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}

console.log(filterEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]


//reverse words 

function reverseWord(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

console.log(reverseWord("Ignacio")); // oicangI

//count letters
function countLetters(sentence) {
  let count = 0;
  for (let char of sentence) {
    if (char !== " ") {
      count++;
    }
  }
  return count;
}

console.log(countLetters("hola mundo")); // 9

//DOM
// Create footer element
const footer = document.createElement("footer");
document.body.appendChild(footer);

// Get current year
const today = new Date();
const thisYear = today.getFullYear();

// Create copyright element
const copyright = document.createElement("p");
copyright.innerHTML = `Ignacio © ${thisYear}`;

// Append to footer
footer.appendChild(copyright);

// Skills array
const skills = ["JavaScript", "HTML", "CSS", "Git", "VS Code"];

// Select the Skills section
const skillsSection = document.getElementById("Skills");

// Select the <ul> inside the Skills section
const skillsList = skillsSection.querySelector("ul");

// Loop to add skills
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

