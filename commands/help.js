module.exports = class {
    name = 'help';
    category = 'General';
    
    execute(msg) {
        msg.channel.send('```\n(Replace ! With Your Servers Prefix)\n!help - This Panel\n!dashboard - Sends The Dashboard Link\n!prefix - Sends The Bots Prefix\n!botinfo - Sends The Bots Info\n!servers - Sends The Amount Of Servers The Bot Is In\n!members - Sends The Amount Of Members The Bot is Watching```');
    }
  }