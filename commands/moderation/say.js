const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "say",
  aliases: ["type"],
  description: "send msg as bot!",
  usage: ".say <text>",
  run: async (client, message, args) => {
    //Start
	message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
	
    const text = args.join(" ")
    if(!text) return message.channel.send(" type something to send as bot ")
    
    setTimeout(function(){
        message.channel.send(`${text}`)
    }, 1000)
   }
 }

