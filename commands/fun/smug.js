const { Client, Message, MessageEmbed, args, } = require('discord.js');
var ee = require('../../config/embed.json');
var config = require('../../config/config.json');

module.exports = {
    name: 'smug',
    aliases: ['mod7ik'],
    category: '🤡fun',
    memberpermissions: ["SEND_MESSAGES"],
    cooldown: '',
    description: '',
    usage: '[mention]to smug user',
    
    run: async (client, message, args, prefix) => {
function dosmugAction() {
    var rand = [
        'https://cdn.weeb.sh/images/HJD-IJtw-.gif',
        'https://cdn.weeb.sh/images/Hk0b8JFPZ.gif',
        'https://cdn.weeb.sh/images/BkpeUJYw-.gif',
        'https://cdn.weeb.sh/images/S1gk-U1KDW.gif',
        'https://cdn.weeb.sh/images/S16z8kFv-.gif',
        'https://cdn.weeb.sh/images/S1slUkFvZ.gif',
        'https://cdn.weeb.sh/images/ByB-UytPW.gif',
        'https://cdn.weeb.sh/images/r1ABouJuW.gif',
        'https://cdn.weeb.sh/images/HkaQI1YvZ.gif',
        'https://cdn.weeb.sh/images/SkV88yKvZ.gif',
        'https://cdn.weeb.sh/images/H1bLLyYwZ.gif',
        'https://cdn.weeb.sh/images/H1xgWUktPW.gif',
        'https://cdn.weeb.sh/images/HyeIU1YPb.gif'
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   // if not a member
        if (!member) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle('`' + message.author.username + '`' + '**sais that was funny**')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                    .setImage(dosmugAction())
                    .setTimestamp()
                    .setColor(ee.color)
            )
        }
        else{
        	const personTagged = message.mentions.members.first();
        	message.channel.send(
                new MessageEmbed()
                .setTitle('`' + message.author.username + '`' + ' has smuged at ' + personTagged.displayName + ' ')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                .setImage(dosmugAction())
                .setTimestamp()
                .setColor(ee.color)
         )
    
   }
	}
}


