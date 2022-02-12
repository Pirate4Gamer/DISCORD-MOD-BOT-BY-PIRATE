const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "setnick",
  aliases: ["nickname"],
  description: "Change Name of Any User!",
  usage: "[COMMAND] + [user] + [Name]",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let nickname = args[1];

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

        if (!nickname) {
            return message.reply(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`** Please Provide a Nick Name**`)
                    .setFooter("Brothers Hands Community")
            )
        }

        if (nickname.length > 32) {
            return message.reply(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`** Nick is Too Bigger Please Give Less Than 32 Words **`)
                    .setFooter("Brothers Hands Community")
            )
        }

        if (user) {
            try {
                const OldName = `\`${user.nickname}\``;
                await user.setNickname(nickname);

                message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setTitle(`✅ NickName Changed`)
                        .setDescription(`✅ <@${user.id}> NickName Successfully Changed!!`)
                        .addField(`> 🔰 Changed By <@${message.author.id}>`,true)
                        .addField(`> OldName :- ${OldName} || > NewName :- ${nickname}`,true)
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