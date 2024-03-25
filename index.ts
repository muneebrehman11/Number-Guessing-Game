#! /usr/bin/env node
import { log } from "console";

import inquirer from "inquirer";
console.log('wellcome to my number guessing game');

const randomNumber= Math.floor(Math.random()*3+1);

const answer= await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "Please enter your Number to guess",

    }
])

if (randomNumber === answer.userNumber){
    console.log(`Congrates you guessed the correct number`);
    
}
else {
    console.log(`Failed! Try Again`);
    
}