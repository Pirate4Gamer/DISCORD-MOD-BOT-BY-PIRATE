const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "bully",
  aliases: ["hogra"],
  description: "bully user!",
  usage: "[mention]to bully user",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
function dobullyAction() {
    var rand = [
         'https://imgur.com/jI8zhH6.gif',
         'https://imgur.com/aBQJPvZ.gif',
         'https://imgur.com/wzn0ghV.gif',
         'https://imgur.com/N10WUeF.gif',
         'https://imgur.com/xmj8XRD.gif',
         'https://imgur.com/g005tMV.gif',
         'https://imgur.com/UYKs7Q1.gif',
         'https://imgur.com/Lbzh24f.gif'
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   // if not a member
        if (!member) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle(`**Please Mention a User to bully**`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                    .setDescription(`usage .bully @user#0000`)
                    .setTimestamp()
                    .setColor(Color)
            )
        }
        else{
        	const personTagged = message.mentions.members.first();
        	message.channel.send(
                new MessageEmbed()
                .setTitle('`' + message.author.username + '`' + ' has bullyed ' + personTagged.displayName + ' ')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                .setImage(dobullyAction())
                .setTimestamp()
                .setColor(Color)
         )
    
   }
	}
}


