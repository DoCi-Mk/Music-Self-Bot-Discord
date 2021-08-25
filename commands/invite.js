const { MessageEmbed } = require("discord.js-self");

exports.run = async (client, message) => {
  const commands = `The Best Music Self Bot`;

  
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Discord Music Self Bot - DoCi" , message.author.displayAvatarURL({ dynamic: true })
      )
      .setURL('https://github.com/DoCi-Mk')
      .setColor("FFFBFB")
      .setTimestamp()
      .setDescription(commands)
  );
};
