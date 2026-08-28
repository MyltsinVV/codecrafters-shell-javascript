const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt()

rl.on('line', (line) => {
  const [command, ...props] = line.split(' ')

  switch (command) {
    case 'exit':
      exit()
      break
    case 'echo':
      echo(props)
      break
    default:
      notFound(line)
  }
})

function notFound (line) {
  console.log(`${line}: command not found`);
  rl.prompt()
}

function exit() {
  rl.close()
}

function echo(props) {
  console.log(props.join(' '))
  rl.prompt()
}