const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "voicemove",
  aliases: ["vcmove"],
  description: "Move Member in Bot Channel!",
  usage: "voicemove",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

        let memberchannel = message.member.voice.channel;

        if (!memberchannel) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`Please Join Voice Channel First`)
                    .setFooter("Brothers Hands Community")
            )
        }

        if (!message.guild.me.voice.connection) {

            memberchannel.join().then((c) => {

                message.guild.me.voice.setSelfDeaf(true);

                message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription(`\`\`I am In Your In VC , Now Drag me VC in Which You Want to Go \`\``)
                        .setFooter("Brothers Hands Community", "Thanks Tyson")

                )

                client.on('voiceStateUpdate', async (oldstate, newstate) => {
                    const channel = oldstate.member.voice.channel;
                    const targetchannel = message.guild.channels.cache.get(newstate.member.voice.channel.id)


                    if (newstate.member.voice.channel && newstate.member.voice.channel.id != memberchannel.id) {
                        if (client.user.id === newstate.member.user.id) {
                            memberchannel.members.forEach((move) => {
                                move.voice.setChannel(targetchannel)

                                targetchannel.leave()
                            })
                        }
                    } else {
                        message.channel.send(
                            new MessageEmbed()
                                .setColor(Color)
                                .setDescription(`I am Already in Voice Channel`)
                                .setFooter("Brothers Hands Community", "Thanks Tyson")
                        )
                    }
                })
            })
        }
    }
}