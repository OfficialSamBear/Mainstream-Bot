const Command = require('./command');

module.exports = class extends Command {
  name = 'dashboard';
  
  execute(msg) {
    msg.channel.send(`The Dashboard Is At https://name of bot repl.co`);
  }
}
