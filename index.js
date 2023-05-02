#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
const welCome = async () => {
    console.log(chalk.yellowBright(figlet.textSync("CountDown Timmer \n")));
};
await welCome();
//Count dow timer
async function startCountdown() {
    const { duration } = await inquirer.prompt([
        {
            type: 'input',
            name: 'duration',
            message: (chalk.redBright('Enter the duration of the countdown in seconds:')),
            validate: (value) => {
                const parsedValue = parseInt(value);
                if (isNaN(parsedValue)) {
                    return 'Please enter a valid number';
                }
                return true;
            },
        },
    ]);
    console.log(chalk.blueBright(`Starting countdown for ${duration} seconds...\n`));
    let remainingTime = parseInt(duration);
    const intervalId = setInterval(() => {
        remainingTime--;
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            console.log(chalk.redBright('\nCountdown completed!\n'));
            return;
        }
        console.log(chalk.greenBright(`Remaining time: ${remainingTime} seconds`));
    }, 1000);
}
startCountdown();
