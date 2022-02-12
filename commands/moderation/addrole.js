const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "role",
  aliases: ["addrole"],
  description: "Add Role To User!",
  usage: ".role <Mention Member>",
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
                    .setTitle(`**Please Mention a User to Give role**`)
                    .setDescription(`> Usage =  ${prefix}addrole + <@user> + <@role>`)
                    .setFooter('Brothers Hands Moderation Bot')
            )
        }


        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

        // if not a Role
        if (!role) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor(ee.colour)
                    .setDescription(`**Please Mention a Role **`)
                    .setFooter('Brothers Hands Moderation Bot')
            )
        }

        if (role.managed) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`** Cannot add That Role to This User **`)
            )
        }

        // // if role is high

        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) {
            new MessageEmbed()
                .setColor(ee.colour)
                .setDescription(`**Role Is Currently Higher Than Me Therefore Cannot Add It To The User!**`)
                .setFooter('Brothers Hands Moderation Bot')
        }


        // add role to user
        //if member has perm
        	await member.roles.add(role);
            message.channel.send(
                new MessageEmbed()
                    .setColor(ee.colour)
                    .setDescription(`${role} Role Has Been Added to <@${member.user.id}>`)
                    .setFooter(`Role added by ${message.author.username}`)
        
            )


    }
}

