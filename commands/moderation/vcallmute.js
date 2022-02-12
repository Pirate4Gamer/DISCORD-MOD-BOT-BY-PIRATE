const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "vcallmute",
  aliases: ["muteallvc"],
  description: "Mute and Unmute Users in Voice Channel!",
  usage: "vcallmute",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

        let voicechannel = message.member.voice.channel;

        if (!voicechannel) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(` <@${message.author.id}> Please Join  Voice Channel`)
                    .setFooter("Brothers Hands Community")
            )
        }

        if (args[1].toLowerCase() === "true") {
            voicechannel.members.filter((x) => !x.permissions.has('ADMINISTRATOR')).forEach((channel) => {
                channel.voice.setMute(true);
                message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription(`${voicechannel.name} Members is Muted Now`)
                )
            })
        }
        if (args[1].toLowerCase() === "false") {
            voicechannel.members.filter((x) => !x.permissions.has('ADMINISTRATOR')).forEach((channel) => {
                channel.voice.setMute(false);
                message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription(`${voicechannel.name} Members is Unmuted Now`)
                )
            })
        }
    }
}