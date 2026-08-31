import readline from "readline"
import { spawnSync } from "child_process"
import { findInPath } from "./utils.js"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt()

const Commands = {
  exit: 'exit',
  echo: 'echo',
  type: 'type'
}

rl.on('line', (line) => {
  const [command, ...props] = line.split(' ')

  switch (command) {
    case Commands.exit:
      exit(props)
      break
    case Commands.echo:
      echo(props)
      break
    case Commands.type:
      type(props)
      break
    default:
      notFound(command, props)
  }

  rl.prompt()
})

function notFound (command, props) {
  const path = findInPath(command)

  if (path) {
    spawnSync(command, props, { stdio: 'inherit' })
  } else {
    console.log(`${command}: command not found`);
  }
}

function exit([code]) {
  process.exit(Number(code) || 0)
}

function echo(props) {
  console.log(props.join(' '))
}

function type([command]) {
  if (Commands[command]) {
    console.log(`${command} is a shell builtin`)
  } else {
    const path = findInPath(command)

    if (path) {
      console.log(`${command} is ${path}`)
    } else {
      console.log(`${command}: not found`)
    }
  }
}