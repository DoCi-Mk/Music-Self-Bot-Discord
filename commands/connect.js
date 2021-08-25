const { MessageEmbed } = require("discord.js-self");

exports.run = async (client, message) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "**Please Join To Voice**"
    );

  if (!channel.permissionsFor(message.client.user).has("CONNECT"))
    return error("I Done Have `CONNECT` Permssion");

  if (!channel.permissionsFor(message.client.user).has("SPEAK"))
    return error("I Done Have `SPEAK` Permssion");

  await channel.join();

  return message.channel.send(
    new MessageEmbed()
      .setDescription("**Joined the voice channel :white_check_mark: **")
      .setColor("BLUE")
  );
};
