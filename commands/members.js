const Command = require('./command');
const bot = require('../bot');

module.exports = class extends Command {
  name = 'members';

  execute(msg) {
    msg.channel.send(`Users: ${bot.users.cache.size}`)
  }
}