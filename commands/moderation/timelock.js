const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "timelock",
  aliases: ["tlock"],
  description: "Start a timed lockdown in a channel!",
  usage: "timelock <time>",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
        const time = args.join(" ");
        if (!time) {
            return message.channel.send(
                 new MessageEmbed()
                .setColor(Color)
                    .setDescription("Enter a valid time period in `Seconds`, `Minutes` or `Hours`")
            );
        }
        message.channel.overwritePermissions([
            {
                id: message.guild.id,
                deny: ["SEND_MESSAGES"]
            }
        ]);
        const embed =  new MessageEmbed()
 .setColor(Color)
            .setTitle("Channel Updates")
            .setDescription(
                `${message.channel} has been placed under lockdown for \`${time}\``
            )
        message.channel.send(embed);

        setTimeout(function () {
            message.channel.overwritePermissions([
                {
                    id: message.guild.id,
                    null: ["SEND_MESSAGES"]
                }
            ]);
            const embed2 =  new MessageEmbed()
 .setColor(Color)
                .setTitle("Channel Updates")
                .setDescription(`Locked has been lifted in ${message.channel}`)
            message.channel.send(embed2);
        }, ms(time));
    }
}