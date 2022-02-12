const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "",
  aliases: [""],
  description: "!",
  usage: "",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
        message.channel.overwritePermissions([
            {
                id: message.guild.id,
                deny: ['SEND_MESSAGES'],
            },
        ]);
        const embed = new MessageEmbed()
            .setColor(Color)
            .setTitle("Channel Updates")
            .setDescription(`🔒 ${message.channel} has been Locked`)
        await message.channel.send(embed).then((msg) => {
            msg.delete({ timeout: 5000 })
        })
    }
}