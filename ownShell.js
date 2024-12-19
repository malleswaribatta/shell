let dir = '~';
const promptText = 'ownShell ';
const fileManager = [];

const echo = function (args) {
  return args;
}

const cd = function (currentDir) {
  dir = currentDir;
}

const touch = function (file) {
  fileManager.push(file);
}

const ls = function () {
  return fileManager.join('   ');
}

const externalCommand = function (command) {

}

const getCommand = function(command, args) {
  switch (command) {
    case 'echo': return echo(args).join("");
    case 'cd': return cd(args);
    case 'ls': return ls();
    case 'touch': return touch(args);
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
