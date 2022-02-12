const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "delrolefromeveryone",
  aliases: ["rrall", "rroleall", "takeroleall"],
  description: "remove a role from all user of the current server",
  usage: 'removeroleall <roles>',
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
        try {
            const [key, ...value] = args;

            switch (key) {
                case "bot":
                    {
                        const role =
                            message.guild.roles.cache.find(
                                role => role.name === args.join(" ").slice(2)
                            ) ||
                            message.mentions.roles.first() ||
                            message.guild.roles.cache.get(args.join(" ").slice(2));

                        if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
                            return message.channel.send(
                                new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`My role is not high enough than **${role.name}** role!`)
                            );
                        }

                        if (message.member.roles.highest.comparePositionTo(role) < 0) {
                            return message.channel.send(
                                new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`Your role must be higher than **${role.name}** role!`)
                            );
                        }

                        if (!role) {
                            return message.channel.send(new MessageEmbed()
                                .setColor(Color).setDescription("Please provide a valid role"));
                        }

                        message.guild.bot.cache.forEach(member => member.roles.add(role));

                        message.channel.send(
                            new MessageEmbed()
                                .setColor(Color)
                                .setDescription(` ✅ Successfully Added **${role.name}** to Bot`)
                        );
                    }
                    break;
                case "member": {
                    const role =
                        message.guild.roles.cache.find(
                            role => role.name === args.join(" ").slice(2)
                        ) ||
                        message.mentions.roles.first() ||
                        message.guild.roles.cache.get(args.join(" ").slice(2));

                    if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
                        return message.channel.send(
                            new MessageEmbed()
                                .setColor(Color)
                                .setDescription(`My role is not high enough than **${role.name}** role!`)
                        );
                    }

                    if (message.member.roles.highest.comparePositionTo(role) < 0) {
                        return message.channel.send(
                            new MessageEmbed()
                                .setColor(Color)
                                .setDescription(`Your role must be higher than **${role.name}** role!`)
                        );
                    }

                    if (!role) {
                        return message.channel.send(
                            new MessageEmbed()
                                .setColor(Color)
                                .setDescription("Please provide a valid role")
                        );
                    }

                    message.guild.members.cache.forEach(member => member.roles.add(role));

                    message.channel.send(
                        new MessageEmbed()
                            .setColor(Color)
                            .setDescription(` ✅ Successfully Added **${role.name}** to member`)
                    );
                }
            }

            const role =
                message.guild.roles.cache.find(
                    role => role.name === args.join(" ").slice(1)
                ) ||
                message.mentions.roles.first() ||
                message.guild.roles.cache.get(args.join(" ").slice(1));

            if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
                return message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription(`My role is not high enough than **${role.name}** role!`)
                );
            }

            if (message.member.roles.highest.comparePositionTo(role) < 0) {
                return message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription(`Your role must be higher than **${role.name}** role!`)
                );
            }

            if (!role) {
                return message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription("Please provide a valid role")
                );
            }

            message.guild.members.cache.forEach(member => member.roles.remove(role));

            message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`Successfully Removed **${role.name}** from Everyone`)
            );
        } catch (e) {
            message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(e)
            )
        }
    }
}
