const Command = require('./command');
const bot = require('../bot');

module.exports = class extends Command {
  name = 'servers';

  execute(msg) {
    msg.channel.send(`Guilds: ${bot.guilds.cache.size}`)
  }
}