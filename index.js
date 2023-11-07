"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var systemGeneratedNo = Math.floor(Math.random() * 10);
var answers = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10: "
    }
]);
var userGuess = answers.userGuess;
console.log(userGuess, "userGuess", systemGeneratedNo, 'SYs');
if (userGuess === systemGeneratedNo) {
    console.log("Yeaaaa Your answer is correct \n You Win!");
}
else {
    console.log("Please try again Better luck next time!");
}
