#! /usr/bin/env node
import inquirer from "inquirer";

let totalAmount = 10000;
console.log(`Your Current Amount is ${totalAmount}`);

let pinCode = 1234;

let checkPincode = await inquirer.prompt(
    {
        type: "number",
        name: "pincode",
        message: "Enter your pincode",
        }
);

if (pinCode === checkPincode.pincode){
    console.log("Pincode is correct");
    let action = await inquirer.prompt(
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                {
                    name: "deposit",
                    value: "deposit"
                },
                {
                    name: "withdraw",
                    value: "withdraw"
                },
                {
                    name: "check balance",
                    value: "check balance"
                },
                {
                    name: "fast cash",
                    value: "fast cash"
                },
                {
                    name: "exit",
                    value: "exit"
                }
            ]
        }
    )

    if (action.action === "deposit"){
        let amount = await inquirer.prompt(
            {
                type: "number",
                name: "amount",
                message: "How much would you like to deposit?"
            }
        )
        totalAmount += amount.amount;
        console.log(`Your Current Amount is ${totalAmount}`);
    } 
    if (action.action === "withdraw"){
        let amount = await inquirer.prompt(
            {
                type: "number",
                name: "amount",
                message: "How much would you like to withdraw?"
            }
        )
        if (amount.amount < totalAmount){
            totalAmount -= amount.amount;
        console.log(`Your Current Amount is ${totalAmount}`);
        }else{
            console.log("Insufficient Funds");
        }
        
    }
    if (action.action === "check balance"){
        console.log(`Your Current Amount is ${totalAmount}`);
    }
    if (action.action === "fast cash"){
        let amount = await inquirer.prompt(
            {
                type: "list",
                name: "amount",
                message: "How much would you like to fast cash?",
                choices: [
                    {
                        name: "1000",
                        value: 1000
                    },
                    {
                        name: "3000",
                        value: 3000
                    },
                    {
                        name: "5000",
                        value: 5000
                    },

                ]
            }
        )
        totalAmount -= amount.amount;
        console.log(`Your Remaining Amount is ${totalAmount}`);
    }
    if (action.action === "exit"){
        console.log("Thank you for using our service");
    }
    

}else{
    console.log("Invalid pin code");
    console.log("Please Try Again........")
    process.exit(1);
}