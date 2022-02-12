const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "kill",
  aliases: ["moot"],
  description: "!",
  usage: "[mention]to kill user",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("SEND_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
function dokillAction() {
    var rand = [
        'https://cdn.weeb.sh/images/r11as1tvZ.gif',
        'https://cdn.weeb.sh/images/HyXTiyKw-.gif',
        'https://cdn.weeb.sh/images/BJO2j1Fv-.gif',
        'https://cdn.weeb.sh/images/B1VnoJFDZ.gif',
        'https://cdn.weeb.sh/images/B1qosktwb.gif'
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   // if not a member
        if (!member) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle(`**Please Mention a User to kill**`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                    .setDescription(`usage .kill @user#0000`)
                    .setTimestamp()
                    .setColor(Color)
            )
        }
        else{
        	const personTagged = message.mentions.members.first();
        	message.channel.send(
                new MessageEmbed()
                .setTitle('`' + message.author.username + '`' + ' has killed ' + personTagged.displayName + ' ')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                .setImage(dokillAction())
                .setTimestamp()
                .setColor(Color)
         )
    
   }
	}
}


