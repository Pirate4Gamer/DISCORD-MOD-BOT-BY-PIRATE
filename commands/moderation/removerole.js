const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "removerole",
  aliases: ["delrole"],
  description: "Remove role From a user!",
  usage: "removerole + <@user> + <@role>",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        // if not a member
        if (!member) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setTitle(`**Please Mention a User to Remove role**`)
                    .setDescription(`> Usage =  ${prefix}removerole + <@user> + <@role>`)
                    .setFooter("Brothers Hands Community")
            )
        }

        // if member role not high
        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) {
            message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`** Your Role is Not High To Remove Role this User`)
                    .setFooter("Brothers Hands Community")
            )
        }

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

        // if not a Role
        if (!role) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor(ee.colour)
                    .setDescription(`**Please Mention a Role **`)
                    .setFooter("Brothers Hands Community")
            )
        }

        if (role.managed) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`** Cannot Remove That Role to This User **`)
            )
        }

        // if role is high

        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) {
            new MessageEmbed()
                .setColor(ee.colour)
                .setDescription(`**Role Is Currently Higher Than Me Therefore Cannot Remove It To The User!**`)
                .setFooter("Brothers Hands Community")
        }


        // add role to user
        if (member.roles.cache.has(role.id)) {
            await member.roles.remove(role.id);
            message.channel.send(
                new MessageEmbed()
                    .setColor(ee.colour)
                    .setDescription(`${role} Role Has Been Removed From <@${member.user.id}>`)
                    .setFooter(`Role Removed by ${message.author.username}`)
            )
        }


    }
}