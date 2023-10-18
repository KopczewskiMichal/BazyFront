const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
  
const planets = {
    Merkury: 0.2408467,
    Wenus: 0.61519726,
    Ziemia: 1,
    Mars: 1.8808158,
    Jowisz: 11.862615,
    Saturn: 29.447498,
    Uran: 84.016846,
    Neptun: 164.79132
}
rl.on("line", line1 =>
  rl.on("line", function(line2) {
        if ((line2 in planets) === false) {
            console.log("Błędne dane")
        } else {
            const res = Number(line1) / (31557600 * Number(planets[line2]))
            console.log(res.toFixed(2))
        }
      rl.close()
    })
);