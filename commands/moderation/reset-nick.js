const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "resetnick",
  aliases: ['rest-nick'],
  description: "Reset Name of Any User!",
  usage: "[COMMAND] + [user]",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        // if not a user
        if (!user) {
            return message.reply(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`** Please Mention a User to Change Nick Name**`)
                    .setFooter("Brothers Hands Community")
            )
        }

        if (user.roles.highest.position > message.member.roles.highest.position) {
            return message.reply(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`** You cant change name of User Which is Equal Your Role**`)
                    .setFooter("Brothers Hands Community")
            )
        }


        if (user) {
            try {
                const OldName = `\`${user.nickname}\``;
                await user.setNickname(null);

                message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setTitle(`✅ NickName Reseted`)
                        .setDescription(`✅ <@${user.id}> NickName Successfully Reseted!!`)
                        .addField(`> 🔰 Changed By <@${message.author.id}>`, true)
                        .addField(`> ✨ OldName :- ${OldName} || > 🔴 NewName :- ${user.user.username}`,true)
                        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
                ).then(msg => msg.delete({ timeout: 5000 }))

            } catch (e) {
                message.channel.send(
                    new MessageEmbed()
                        .setDescription(e)
                )
            }
        }
    }
}