const { Client, Message, MessageEmbed, args, } = require('discord.js');
var ee = require('../../config/embed.json');
var config = require('../../config/config.json');

module.exports = {
    name: 'laugh',
    aliases: ['haha'],
    category: '🤡fun',
    memberpermissions: ["SEND_MESSAGES"],
    cooldown: '',
    description: '',
    usage: '[mention]to laugh user',
    
    run: async (client, message, args, prefix) => {
function dolaughAction() {
    var rand = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   // if not a member
        if (!member) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle('`' + message.author.username + '**is laughing**')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                    .setImage(dolaughAction())
                    .setTimestamp()
                    .setColor(ee.color)
            )
        }
        else{
        	const personTagged = message.mentions.members.first();
        	message.channel.send(
                new MessageEmbed()
                .setTitle('`' + message.author.username + '`' + ' is laughed at ' + personTagged.displayName + ' ')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                .setImage(dolaughAction())
                .setTimestamp()
                .setColor(ee.color)
         )
    
   }
	}
}


