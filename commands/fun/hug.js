const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "hug",
  aliases: ["3ana9a"],
  description: "!",
  usage: "[mention]to hug user",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("SEND_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
function dohugAction() {
    var rand = [
        'https://cdn.weeb.sh/images/r1v2_uXP-.gif',
        'https://cdn.weeb.sh/images/rko9O_mwW.gif',
        'https://cdn.weeb.sh/images/Hk0yFumwW.gif',
        'https://cdn.weeb.sh/images/ryg2dd7wW.gif',
        'https://cdn.weeb.sh/images/HkfgF_QvW.gif',
        'https://cdn.weeb.sh/images/Hyec_OmDW.gif',
        'https://cdn.weeb.sh/images/SywetdQvZ.gif',
        'https://cdn.weeb.sh/images/S1qhfy2cz.gif',
        'https://cdn.weeb.sh/images/BysjuO7D-.gif',
        'https://cdn.weeb.sh/images/Hk4qu_XvZ.gif',
        'https://cdn.weeb.sh/images/Sy65_OQvZ.gif', 
        'https://cdn.weeb.sh/images/SyQ0_umD-.gif',
        'https://cdn.weeb.sh/images/ryCG-OatM.gif',
        'https://cdn.weeb.sh/images/HJU2OdmwW.gif'
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   // if not a member
        if (!member) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle(`**Please Mention a User to hug**`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                    .setDescription(`usage .hug @user#0000`)
                    .setTimestamp()
                    .setColor(Color)
            )
        }
        else{
        	const personTagged = message.mentions.members.first();
        	message.channel.send(
                new MessageEmbed()
                .setTitle('`' + message.author.username + '`' + ' has huged ' + personTagged.displayName + ' ')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                .setImage(dohugAction())
                .setTimestamp()
                .setColor(Color)
         )
    
   }
	}
}


