const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "delallmessages",
  aliases: ["delallmsgs"],
  description: "clear the whole channel!",
  usage: "",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

        if (!args.length) {
             new MessageEmbed()
                .setColor(Color)
                .setDescription(`Usage >>> ${prefix}deleteallmessages <#channel>`)
        }
        let channel = message.mentions.channels.first();
        if (!channel) {
            message.channel.send(
                 new MessageEmbed()
                .setColor(Color)
                    .setDescription(`Please Specify a Channel to Delete Messages`)
            )
        } else {
            const position = channel.position;
            const topic = channel.topic;
            const channel2 = await channel.clone()
            channel2.setPosition(position);
            channel2.setTopic(topic);
            channel.delete();
            const nuke =  new MessageEmbed()
 .setColor(Color)
                .setColor("BLUE")
                .setDescription(" 🤣😂 **Channel Messages Has Been Deleted!**");
            return message.author.send(nuke)
        }


    }
}
