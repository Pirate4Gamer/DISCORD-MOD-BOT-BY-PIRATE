const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "dm",
  aliases: ["prv"],
  description: "Send Direct/Private Msg To User As Bot!",
  usage: ".dm <Mention Member> <text>",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    const sayEmbed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setImage(args.join(" "))
        .setTimestamp()
        .setColor(ee.color)

    message.channel.send(sayEmbed)
  },
};
