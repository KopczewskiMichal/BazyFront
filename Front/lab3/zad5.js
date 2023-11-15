const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
  
rl.on("line", function(line) {
    if (Number(line) !== NaN) {
        for (let i = 1; i <= line; i++) {
            console.log("*".repeat(i))
        }
        for (let i = line; i > 0; i--) {
            console.log("*".repeat(i))
        }
        for (let i = 0; i < line; i++) {
            console.log( " ".repeat(i) +"*".repeat(line - i))
        }
        for (let i = (line - 1); i >= 0; i--) {
            console.log( " ".repeat(i) +"*".repeat(line - i))
        }
}
}
);