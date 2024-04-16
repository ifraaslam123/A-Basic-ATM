#! /usr/bin/env node 
import inquirer from "inquirer";
//intialize user balance and pin code
let myBalance = 10000; // Dollar
let myPin = 1234;
//print welcome message
console.log("welcome to ifra aslam = ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct , login successfully!");
    //console.log("current Amount Balance is ${myBalance}")
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw Amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrwal method",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select Amount",
                    choices: [1000, 2000, 5000, 10000, 20000],
                }
            ]);
            if (fastcashAns.fastCash > myBalance) {
                console.log("Insufficient Blance");
            }
            else {
                myBalance -= fastcashAns.fastCash;
                console.log(` ${fastcashAns.fastCash} withdraw Successfully!`);
                console.log(`Your remaining Balnce is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(` ${amountAns.amount} withdraw Successfully`);
                console.log("your remaining balance is:" + myBalance);
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("Pin is Incorrect ,Try Again!");
}
