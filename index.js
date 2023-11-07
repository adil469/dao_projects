"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var loop = true;
while (loop) {
    var answers = await inquirer_1.default.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo? ",
            default: false
        }
    ]);
    var TODO = answers.TODO, addmore = answers.addmore;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your TOdo List:");
    todos.forEach(function (todo) {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}
