const { MessageEmbed } = require("discord.js-self");

exports.run = async (client, message) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "Please Join To Voice And Use Command"
    );

  await channel.leave();

  return message.channel.send(
    new MessageEmbed()
      .setDescription("**Left the voice channel :white_check_mark: **")
      .setColor("BLUE")
  );
};
