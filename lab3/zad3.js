const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
const arg = Number(line)
const numbers = line.split("").map(Number)
const len = numbers.length
const res = numbers.reduce((acc, current)=> acc + current ** len, 0)
console.log(res == arg);
    
});

