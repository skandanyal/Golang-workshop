var num1 = 999;
var num2 = 111;
var num3 = "111";

// console.log("my name is " + name + " " + initial);

// console.log(num1+num2, num2-num1, num1*num2, num2/num1, num1**num2)
// console.log(num1>num2, num1<num2, num1==num2)
// console.log(num3 === num2, num3 == num2)
// console.log("22" + 2 - 1);
// console.log(num2 == num1 && num1 < num2);
// console.log(!num2);

// const readline = require("readline");
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter your name: ", function(name) {
//     console.log("Hello, " + name + "!");
//     rl.close();
// });

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter principal amount: ", function (principal){
    rl.question("Enter time duration in years: ", function (time){
        rl.question("Enter rate of interest in percentage: ", function (rate){
            principal = parseFloat(principal);
            time = parseFloat(time);
            rate = parseFloat(rate);

            let si = (principal * time * rate) / 100;
            console.log("Simple interest: " + si);

            si = 100;
            console.log(si);

            const a = 50;
            console.log(a);

            rl.close();
        });
    });
});