const { Client, Message, MessageEmbed, args, } = require('discord.js');
var ee = require('../../config/embed.json');
var config = require('../../config/config.json');

module.exports = {
    name: 'slap',
    aliases: ['slay'],
    category: 'fun',
    memberpermissions: ["SEND_MESSAGES"],
    cooldown: '',
    description: 'to slap/spank someone',
    usage: '[mention]to slap user',
    
    run: async (client, message, args, prefix) => {
function doslapAction() {
    var rand = [
        'https://data.yuibot.app/reactions/slap/aVDQEfA.gif',
        'https://data.yuibot.app/reactions/slap/209927099839152185.gif',
        'https://cdn.weeb.sh/images/B1oCmkFw-.gif',
        'https://data.yuibot.app/reactions/slap/HGxqG1N.gif',
        'https://data.yuibot.app/reactions/slap/32TM2xW.gif',
        'https://data.yuibot.app/reactions/slap/210240420119314489.gif',
        'https://data.yuibot.app/reactions/slap/221279798622289939.gif',
        'https://data.yuibot.app/reactions/slap/4CZe0Jb.gif',
        'https://data.yuibot.app/reactions/slap/240175674413417394.gif',
        'https://data.yuibot.app/reactions/slap/209592406178529280.gif',
        'https://data.yuibot.app/reactions/slap/221285818530660372.gif',
        'https://data.yuibot.app/reactions/slap/437574.gif',
        'https://data.yuibot.app/reactions/slap/240175674413417394.gif'
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   // if not a member
        if (!member) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle(`**Please Mention a User to slap**`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                    .setDescription(`usage .slap @user#0000`)
                    .setTimestamp()
                    .setColor(ee.color)
            )
        }
        else{
        	const personTagged = message.mentions.members.first();
        	message.channel.send(
                new MessageEmbed()
                .setTitle('`' + message.author.username + '`' + ' has slaped ' + personTagged.displayName + '`')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                .setImage(doslapAction())
                .setTimestamp()
                .setColor(ee.color)
         )
    
   }
	}
}


