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
      .setDescription('[__Best Team For Learning You__](https://discord.gg/HQgE9pU6Ju) \n **Just Join** : \n https://discord.gg/HQgE9pU6Ju')
    .setimage('https://cdn.discordapp.com/attachments/874612520520929320/879285033670697031/Banner.jpg')
  );
};
