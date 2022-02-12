const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "text",
  aliases: ["embed"],
  description: "send msg embed as bot!",
  usage: ".text <text>",
  run: async (client, message, args) => {
    //Start
	message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    const sayEmbed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor(Color)
        .setFooter(`by ${message.author.username}`)

    message.channel.send(sayEmbed)
    message.delete()
      
  },
};
