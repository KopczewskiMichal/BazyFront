function answer(arr) {
  return helper(arr)

  function helper (inArr, acc = {}) {
    if (inArr[0] !== undefined) {
      const elem = inArr[0]
      inArr.shift()
      if (elem in acc) return helper(inArr, {...acc, [elem]:acc[elem]+1})
      else return helper(inArr, {...acc, [elem]:1})
    } else return acc
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
    console.log(answer(line.split(" ")))
});

// dog chicken cat dog chicken chicken rabbit