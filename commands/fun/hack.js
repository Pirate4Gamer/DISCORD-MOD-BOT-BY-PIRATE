const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Footerequest, Footerpirate } = require("../../config.js");

module.exports = {
  name: "hack",
  aliases: [],
  description: "Hack Member!",
  usage: "Hack <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To Hack!`
      );

    if (Member.user.id === message.author.id)
      return message.channel.send(`Why you wanna hack yourself dumby ass`);
    
    let Result1 = Math.floor(Math.random() * 999);
    let Result2 = Math.floor(Math.random() * 999);
    let Result3 = Math.floor(Math.random() * 999);
    let Result4 = Math.floor(Math.random() * 999);
    let Result5 = Math.floor(Math.random() * 999);
    let Result6 = Math.floor(Math.random() * 999);
    let Result7 = Math.floor(Math.random() * 999);
    let Result8 = Math.floor(Math.random() * 999);
    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hack Status: Completed`)
      .setDescription(
        `Name: ${Member.user.username} | ID: ${
          Member.user.id
        }
        IP: ||${Result1}.${Result2}.${Result3}.${Result4}||
        EMAIL: ${Member.user.username}${Result5}@gmail.com
        PASSWORD: ||${Result6}${Result7}${Result8}||`
      )
      .setFooter(`Jk Don't Take It Serious Its Just Random Generated Strings!`)
      .setTimestamp();

    await message.channel.send(`Hacking Started! Hacking ${Member.user.username}`);

    await message.channel.send(`Hack Status: 10%`);

    await message.channel.send(`Hack Status: 20%`);

    await message.channel.send(`Hack Status: 30%`);

    await message.channel.send(`Hack Status: 40%`);

    await message.channel.send(`Hack Status: 50%`);

    await message.channel.send(`Hack Status: 60%`);

    await message.channel.send(`Hack Status: 70%`);

    await message.channel.send(`Hack Status: 80%`);

    await message.channel.send(`Hack Status: 90%`);

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

    //End
  }
};