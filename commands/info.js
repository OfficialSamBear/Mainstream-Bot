const Command = require('./command');
const bot = require('../bot');

module.exports = class extends Command {
  name = 'botinfo';

  execute(msg) {
    msg.channel.send(`Guilds: ${bot.guilds.cache.size}\nUsers: ${bot.users.cache.size}`)
  }
}