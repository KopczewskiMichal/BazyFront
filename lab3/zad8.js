function answer(numbers) {
  console.log(helper(numbers))
  
function helper (inArr, acc = []) {
    if (inArr[0] !== undefined) {
      const square = (inArr[0] ** 2).toFixed(2)
      inArr.shift()
      if (square % 1 === 0) return helper(inArr, [...acc, square])
      else return helper(inArr, acc)
    } else return acc
}
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
    answer(line.split(" "))
    
});