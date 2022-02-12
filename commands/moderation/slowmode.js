const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "slowmode",
  aliases: ["slm"],
  description: "Do Poll in Server!",
  usage: "[COMMAND] + [Channel] + [Question]",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );


        if (!isNaN(args[0]) || parseInt(args[0]) < 0) {
            let embed =  new MessageEmbed()
 .setColor(Color)
                .setDescription(`✅ Slowmode Enabled in ${message.channel} on Time ${args[0]}!`)
            message.reply(embed)
            message.channel.setRateLimitPerUser(args[0])
        } else {
            let embed2 =  new MessageEmbed()
 .setColor(Color)
                .setDescription(`Provided Argument is Not Number`)
            message.reply(embed2)
        }


    }
}