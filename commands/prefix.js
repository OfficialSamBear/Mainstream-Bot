const Command = require('./command');
const guilds = require('../data/guilds');
const guild = require('../data/models/guild');

module.exports = class extends Command {
  name = 'prefix';
  
  async execute(msg, args) {
    const savedGuild = await guilds.get(msg.guild.id);
    const data = await guild.findOne({
    _id: msg.guild.id
    });
    if (!msg.member.permissions.has('ADMINISTRATOR')) {
        return msg.channel.send("You are not allowed to change the bot's prefix!");
    }
    if (!args)
      return msg.channel.send(`Prefix is \`${savedGuild.general.prefix}\``);
    //savedGuild.general.prefix = value;
    const g = await guild.updateOne({
       _id: msg.guild.id },
                                    { $set: {
                                      general: {
                                        prefix: args[0]
                                      },
                                    }
                                    });

    return msg.channel.send(`Prefix is now \`${args[0]}\``);
  }
}