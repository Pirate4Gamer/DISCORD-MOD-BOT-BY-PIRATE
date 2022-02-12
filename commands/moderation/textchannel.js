const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "textchannel",
  aliases: ["ch"],
  description: "Create and Delete Text Channels!",
  usage: "[COMMAND] + <create/delete> + <name>",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

        let channelName = args.slice(1).join(" ");

        if (!args[0]) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setTitle(`To Create and Delete Text Channel Follow Me`)
                    .setDescription(`> ${prefix}textchannel <create> <Name>`)
                    .addField(`> ${prefix}textchannel <delete> <#channel>`)
                    .setFooter("Brothers Hands Community")
            )
        }

        if (args[0].toLowerCase() === "create") {
            if (!channelName) {
                return message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription(`Please Give Channel Name`)
                        .setFooter("Brothers Hands Community")
                )
            }
            try {
                message.guild.channels.create(channelName, {
                    topic: "For Chatting",
                    type: 'text'
                })

            } catch (e) {
                message.channel.send(
                    new MessageEmbed()
                        .setDescription(e)
                )
            }
        }

        // delete channel

        if (args[0].toLowerCase() === "delete") {
            try {
                let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
                if (!channel) return message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription(`Please Give Channel to Delete`)
                        .setFooter("Brothers Hands Community")
                )

                await channel.delete()
            } catch (e) {
                message.channel.send(
                    new MessageEmbed()
                        .setDescription(e)
                )
            }
        }
    }
}