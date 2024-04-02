#! /usr/bin/env node

import inquirer from "inquirer";

const anwser = await inquirer.prompt([
  { message: "Enter your First Number", type: "number", name: "firstNumber" },
  { message: "Enter your Second Number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage"],
  },
]);

console.log(anwser);

//conditional statement
if (anwser.operator === "Addition") {
    console.log(anwser.firstNumber + anwser.secondNumber);
} else if (anwser.operator === "Subtraction"){
    console.log(anwser.firstNumber - anwser.secondNumber);
} else if (anwser.operator === "Multiplication"){
    console.log(anwser.firstNumber * anwser.secondNumber);
} else if (anwser.operator === "Division"){
    console.log(anwser.firstNumber / anwser.secondNumber);
} else if (anwser.operator === "Percentage"){
    console.log(anwser.firstNumber / anwser.secondNumber * 100);
} else {
    console.log("Please select valid operator");
}

console.log("THE END");