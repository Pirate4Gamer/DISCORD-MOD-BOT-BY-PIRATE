const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "cry",
  aliases: ["hazin"],
  description: "!",
  usage: "[mention]to cry user",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("SEND_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
function docryAction() {
    var rand = [
        'https://cdn.weeb.sh/images/HkbPQUQvW.gif',
        'https://cdn.weeb.sh/images/HJIpry35M.gif',
        'https://cdn.weeb.sh/images/r1WMmLQvW.gif',
        'https://cdn.weeb.sh/images/BJf41e51z.gif',
        'https://cdn.weeb.sh/images/Bk_fmL7wZ.gif',
        'https://cdn.weeb.sh/images/ryVBX8mw-.gif',
        'https://cdn.weeb.sh/images/SkwVQLXwW.gif',
        'https://cdn.weeb.sh/images/SJ-11x5kz.gif',
        'https://cdn.weeb.sh/images/BJJkFTN0b.gif',
        'https://cdn.weeb.sh/images/Hy4QmU7PZ.gif'
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   // if not a member
        if (!member) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle('`' + message.author.username + '**IS CRYING**')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                    .setImage(docryAction())
                    .setTimestamp()
                    .setColor(Color)
            )
        }
        else{
        	const personTagged = message.mentions.members.first();
        	message.channel.send(
                new MessageEmbed()
                .setTitle('`' + message.author.username + '`' + ' is crying for ' + personTagged.displayName + ' ')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
                .setImage(docryAction())
                .setTimestamp()
                .setColor(Color)
         )
    
   }
	}
}


