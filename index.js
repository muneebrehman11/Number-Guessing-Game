#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "Please enter your Number to guess",
    }
]);
if (randomNumber === answer.userNumber) {
    console.log(`Congrates you guessed the correct number`);
}
else {
    console.log(`Failed! Try Again`);
}
