const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "vote",
  aliases: ["poll"],
  description: "Do vote in Server!",
  usage: "[COMMAND] + [Channel] + [Question]",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
        const channel = message.mentions.channels.first()
        if (!args.length) return message.channel.send(
             new MessageEmbed()
                .setColor(Color)
                .setDescription(`Usage >>> ${prefix}vote <#channel> <question>`))
        if (!channel) {
            message.reply(
                 new MessageEmbed()
                .setColor(Color)
                    .setDescription("Specify A Channel To Send This vote")
            )
            return
        } else {
            let announce = args.slice(1).join(" ")
            if (!announce) return message.channel.send(`Please Specify What Do You Want To Announce`)
            const embed =  new MessageEmbed()
 .setColor(Color)
                .setTitle(`🔰vote Time 🔰`)
                .setDescription(`${announce}`)
                .setFooter("vote started by: " + message.author.username + '#' + message.author.discriminator)
            let msgEmbed = await channel.send(embed)
            await msgEmbed.react('✅')
            await msgEmbed.react('❌')
        }
    }
}

