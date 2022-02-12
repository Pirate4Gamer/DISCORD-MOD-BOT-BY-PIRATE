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
        let text = args.slice(1).join(' ');
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])

        if (!user) {
            return message.reply(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`** Please Mention a User to Send Message **`)
                    .setFooter("Brothers Hands Community")
            ).then(msg => msg.delete({ timeout: 3000 }))
        }

        if (!text) {
            message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`** Please Write  a Message to Send User **`)
                    .setFooter("Brothers Hands Community")
            ).then(msg => msg.delete({ timeout: 3000 }))
        }

        let userembed = new MessageEmbed()
            .setColor(Color)
            .setTitle(`Message From Brothers Hands Community`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            .setDescription(args.join(" "))
            .setFooter(`by ${message.author.username}`)


        user.send(userembed).catch(e => {
            if (!e) {
                return message.reply(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription(e)
                        .setFooter("Brothers Hands Community")
                ).then(msg => msg.delete({ timeout: 3000 }))
            } else {
                message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription(`Message SuccessFully Sent to <@${user.id}>`)
                        .setFooter("Brothers Hands Community")
                ).then(msg => msg.delete({ timeout: 3000 }))
            }
        })
    }
}

