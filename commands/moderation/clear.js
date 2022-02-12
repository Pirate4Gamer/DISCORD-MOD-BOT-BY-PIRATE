const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args, prefix) => {
        try {
        	
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
	  return message.channel.send(
		`You Don't Have Permission To Use This Command!`
	  );
	
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

            const commands = [
                `> bots\`       >  ✅ \`\`Delete messages sent by bots. (Ignore humans)\`\`\n`,
                `> humans\`     >  ✅ \`\`Delete messages sent by humans. (Ignore bots)\`\`\n`,
                `> embeds\`     >  ✅ \`\`Delete messages containing rich embeds\`\`'n`,
                `> files\`      >  ✅ \`\`Delete messages containing files/images/attachments\`\`\n`,
                `> mentions\`   >  ✅ \`\`Delete messages containing member/user/channel/role mentions\`\`\n`,
                `> pins\`       >  ✅ \`\`Delete messages which are pinned\`\`\n`,
                `> text\`       >  ✅ \`\`Delete messages containing only text. (Ignores files/images/attachments, embeds)\`\`\n`,
                `> match\`      >  ✅ \`\`<text> - Delete messages containing text\`\`\n`,
                `> not\`        >  ✅ \`\`<text> - Delete messages not containing text\`\`\n`,
                `> startswith\` >  ✅ \`\`<text> - Delete messages starts with text\`\`\n`,
                `> endswith\`   >  ✅ \`\`<text> - Delete messages ends with text\`\`\n`
            ]

            let delembed = new MessageEmbed()
                .setColor(Color)
                .setTitle(`\`\` **PURGE | CLEAR | DELETE | PRUNE** \`\``)
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                .addField(`**You can delete a Number of Messages in Channel**`)
                .setDescription(`> Usage :- \`${prefix}purge <amount>\` - Delete a number of messages.\n\`${prefix}purge <amount>  ${commands.join(`\n\`${prefix}purge <amount>  `)}`)
                .setFooter(`${prefix}purge, ${prefix}clear, ${prefix}delete, ${prefix}prune`)


            if (!args[0] || !args.length) return message.channel.send(delembed);
            let amount = Number(args[0], 10) || parseInt(args[0]);
            if (isNaN(amount) || !Number.isInteger(amount)) return message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`Please Enter A Delete Amount Between 1 - 99`)
                    .setFooter('Brothers Hands Moderation Bot')
            )
            if (!amount || amount < 2 || amount > 100) return message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(`Please Enter A Delete Amount Between 1 - 99`)
                    .setFooter('Brothers Hands Moderation Bot')
            )
            if (!args[1]) {

                try {
                    await message.delete()
                    await message.channel.bulkDelete(amount).then(async (m) => {

                        let embed = new MessageEmbed()
                            .setColor(Color)
                            .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                            .setFooter('Brothers Hands Moderation Bot')

                        message.channel.send(embed).then(msg => msg.delete({ timeout: 4000 }));
                    })

                } catch (e) {
                    message.channel.send(
                        new MessageEmbed()
                            .setDescription(e)
                    )
                }

            } else if (args[1]) {
                let msg;
                let data;
                let embed;
                switch (args[1]) {
                    case "bots":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (ms.author.bot && !ms.pinned) data.push(ms)
                        })

                        try {
                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                botsdel = new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(botsdel).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break;
                    case "humans":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!ms.author.bot && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                humanembed = new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(humanembed).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break;
                    case "embeds":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (ms.embeds.length && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break;
                    case "files":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (ms.attachments.first() && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break; case "text":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!ms.attachments.first() && !ms.embeds.length && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break;
                    case "mentions":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if ((ms.mentions.users.first() || ms.mentions.members.first() || ms.mentions.channels.first() || ms.mentions.roles.first()) && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break;
                    case "pins":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break;
                    case "match":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!args[2]) return message.channel.send(embd);
                            if (ms.content.includes(args.slice(2).join(" ")) && !ms.pinned) data.push(ms)
                        })

                        try {


                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new MessageEmbed()
                                    .setColor('Brothers Hands Moderation Bot')
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break;
                    case "not":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!args[2]) return message.channel.send(embd);
                            if (!ms.content.includes(args.slice(2).join(" ")) && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break;
                    case "startswith":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!args[2]) return message.channel.send(embd);
                            if (ms.content.startsWith(args.slice(2).join(" ")) && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break;
                    case "endswith":
                        msg = await message.channel.messages.fetch({ limit: amount })
                        data = []
                        msg.map(m => m).forEach(ms => {
                            if (!args[2]) return message.channel.send(embd);
                            if (ms.content.endsWith(args.slice(2).join(" ")) && !ms.pinned) data.push(ms)
                        })

                        try {

                            await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {

                                embed = new MessageEmbed()
                                    .setColor(Color)
                                    .setDescription(`✅  Cleared **${m.size}**/**${amount}** messages!`)
                                    .setFooter('Brothers Hands Moderation Bot')

                                message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
                            })

                        } catch (e) {
                            message.channel.send(
                                new MessageEmbed()
                                    .setDescription(e)
                            )
                        }

                        break;
                    default:
                        message.channel.send(
                            new MessageEmbed()
                                .setColor(Color)
                                .setDescription(`You cant Delete Message Older Than 14 Dyas `)
                                .setFooter('Brothers Hands Moderation Bot')
                        )
                        break;
                }

            } else {
                return message.channel.send(
                    new MessageEmbed()
                        .setColor(Color)
                        .setDescription(`You cant Delete Message Older Than 14 Dyas `)
                        .setFooter('Brothers Hands Moderation Bot')
                )
            }

        } catch (e) {
            message.channel.send(
                new MessageEmbed()
                    .setColor(Color)
                    .setDescription(e)
                    .setFooter('Brothers Hands Moderation Bot')
            )
        }

    }
}

