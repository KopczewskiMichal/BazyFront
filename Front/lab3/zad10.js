function answer (arr, search) {
  return helper(arr, search)

  function helper (arr, search, start = 0, stop = arr.length) {
    if (start >= stop) return "Brak elementu w ciągu!!!";
    else {
      const q = Math.floor((start + stop) / 2)
      if (arr[q] === search) return q;
      else if (search < arr[q]) return helper(arr, search, start, q);
      else return helper(arr, search, q + 1, stop)
    }
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", line1 =>
  rl.on("line", function(line2) {
       const arr = line1.split(" ").map(Number)
       const search = Number(line2)

      console.log(answer(arr, search))
      rl.close()
    })
);

testIn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ,21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
console.log(answer(testIn, 1));