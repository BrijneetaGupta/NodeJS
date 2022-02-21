function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const name = process.argv[process.argv.length - 1]
    return name
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name
}

function getNameFromReadLine() {
    // Write your code here
    const readline = require("readline")
    const readInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    readInput.question("Enter your name here: ", (fullName)=>{
        return fullName
    })
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}