const { Client, Message, MessageEmbed, args, } = require('discord.js');
var ee = require('../../config/embed.json');
var config = require('../../config/config.json');

module.exports = {
    name: 'punch',
    aliases: ['hak'],
    category: '🤡fun',
    memberpermissions: ["SEND_MESSAGES"],
    cooldown: '',
    description: '',
    usage: '[mention]to punch user',
    
    run: async (client, message, args, prefix) => {
function dopunchAction() {
    var rand = [
        'https://cdn.weeb.sh/images/rJHLDT-Wz.gif',
        'https://cdn.weeb.sh/images/B1rZP6b-z.gif',
        'https://cdn.weeb.sh/images/BkdyPTZWz.gif',
        'https://cdn.weeb.sh/images/HJfGPTWbf.gif',
        'https://cdn.weeb.sh/images/rkkZP6Z-G.gif',
        'https://cdn.weeb.sh/images/ByI7vTb-G.gif',
        'https://cdn.weeb.sh/images/BkdyPTZWz.gif',
        'https://cdn.weeb.sh/images/SJR-PpZbM.gif',
        'https://cdn.weeb.sh/images/SkFLH129z.gif'
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   // if not a member
        if (!member) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle(`**Please Mention a User to punch**`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                    .setDescription(`usage .punch @user#0000`)
                    .setTimestamp()
                    .setColor(ee.color)
            )
        }
        else{
        	const personTagged = message.mentions.members.first();
        	message.channel.send(
                new MessageEmbed()
                .setTitle('`' + message.author.username + '`' + ' has punched ' + personTagged.displayName + ' ')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                .setImage(dopunchAction())
                .setTimestamp()
                .setColor(ee.color)
         )
    
   }
	}
}


