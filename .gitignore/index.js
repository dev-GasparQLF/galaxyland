const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');

var GalaxyLandID = "509778042940424215"
let prefix = '--'

bot.on('message', message => {
    if (message.content === prefix + 'ping') {
        let msgping1 = new Date();
        let botping = new Date() - message.createdAt;
        let msgping2 = new Date() - msgping1;
        let pingembed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField('API Ping : ', Math.floor(bot.ping) + 'ms')
            .addField('Bot Ping : ', Math.floor(botping) + 'ms')
            .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
            .setTimestamp(new Date())
            .setFooter(`${message.author.tag}`);          
        return message.channel.send(pingembed).then(async msg => {
            msg.edit(pingembed)
        });
    }
})

bot.on('ready', () => {
    bot.user.setActivity(`${bot.guilds.get(GalaxyLandID).memberCount} membres | discord.me/galaxyland`, { type: 'WATCHING'});
    console.log('Je suis connecté !')
})

bot.on('guildMemberAdd', member => {
    bot.user.setActivity(`${bot.guilds.get(GalaxyLandID).memberCount} membres | discord.me/galaxyland`, { type: 'WATCHING'});
})

bot.on('guildMemberRemove', member => {
    bot.user.setActivity(`${bot.guilds.get(GalaxyLandID).memberCount} membres | discord.me/galaxyland`, { type: 'WATCHING'});
})

bot.login(process.env.TOKEN)
