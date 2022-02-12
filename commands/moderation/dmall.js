const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "dmall",
  aliases: ["prvall"],
  description: "Send Direct/Private Msg To all Users As Bot!",
  usage: ".dm  <text>",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

            let dmtext = args.slice(1).join(" ");

            message.guild.members.cache.forEach(user => {
                user.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setTitle(`Message From Brothers Hands community`)
                        .setDescription(args.join(" "))
                        .setFooter(`by ${message.author.username}`)
                ).catch(err => console.log(err))
            })
            message.channel.send(`Done`).then(msg => msg.delete({ timeout: 5000 }))
        }
    }
