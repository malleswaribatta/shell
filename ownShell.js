let dir = '~';
const promptText = 'ownShell ';

const echo = function (args) {
  return args;
}

const cd = function (currentDir) {
  dir = currentDir;
}

const externalCommand = function (command) {

}

const getCommand = function(command, args) {
  switch (command) {
    case 'echo': return echo(args).join("");
    case 'cd': return cd(args);
    default: externalCommand(command);
  }
}

while (true) {
  const runCommand = prompt(promptText + dir + ' %');
  const [command, ...args] = runCommand.split(" ");
  const result = getCommand(command, args);

  if ( result !== undefined) {
    console.log(result);
  }
}
