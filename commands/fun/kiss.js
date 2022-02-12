const { Client, Message, MessageEmbed, args, } = require('discord.js');
var ee = require('../../config/embed.json');
var config = require('../../config/config.json');

module.exports = {
    name: 'kiss',
    aliases: ['mua7'],
    category: 'fun',
    memberpermissions: ["SEND_MESSAGES"],
    cooldown: '',
    description: '',
    usage: '[mention]to kiss user',
    
    run: async (client, message, args, prefix) => {
function doKissAction() {
    var rand = [
        'https://data.yuibot.app/reactions/kiss/209983326594007117.gif',
        'https://data.yuibot.app/reactions/kiss/237466601150611668.gif',
        'https://data.yuibot.app/reactions/kiss/234082934.gif',
        'https://data.yuibot.app/reactions/kiss/258522859802594820.gif',
        'https://data.yuibot.app/reactions/kiss/228017512776335453.gif',
        'https://data.yuibot.app/reactions/kiss/a2qzZ7w.gif',
        'https://data.yuibot.app/reactions/kiss/723805.gif',
        'https://data.yuibot.app/reactions/kiss/cxl66EV.gif',
        'https://data.yuibot.app/reactions/kiss/a2qzZ7w.gif',
        'https://data.yuibot.app/reactions/kiss/yL5qOOP.gif',
        'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif',
        'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
        'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
        'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif'
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   // if not a member
        if (!member) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle(`**Please Mention a User to Kiss**`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                    .setDescription(`usage .kiss @user#0000`)
                    .setTimestamp()
                    .setColor(ee.color)
            )
        }
        else{
        	const personTagged = message.mentions.members.first();
        	message.channel.send(
                new MessageEmbed()
                .setTitle('`' + message.author.username + '`' + ' has kissed ' + personTagged.displayName + ' ')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                .setImage(doKissAction())
                .setTimestamp()
                .setColor(ee.color)
         )
    
   }
	}
}


