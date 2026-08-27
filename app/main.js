const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt()

rl.on("line", (line) => {
  console.log(`${line}: command not found`);
  rl.prompt()
})
