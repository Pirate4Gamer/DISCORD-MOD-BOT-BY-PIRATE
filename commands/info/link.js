const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "link",
  aliases: ["lien"],
  description: "to see the server link!",
  usage: ".link",
  run: async (client, message, args, prefix) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("SEND_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    
    setTimeout(function(){
        message.channel.send(`discord.gg/bh-life`)
    }, 1000)
  }
}

