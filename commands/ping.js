const { MessageEmbed } = require("discord.js-self");


exports.run = async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    message.channel.send(` Api Latency: \`${Math.round(client.ws.ping)}ms\``)
  
}
  
