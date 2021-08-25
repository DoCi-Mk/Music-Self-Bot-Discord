const Discord = require("discord.js-self");

exports.run = async (client, message , args) => {

    if(message.content.includes('@everyone'))return message.channel.send(
        new Discord.MessageEmbed()
        .setColor('#ff0a26')
        .setDescription('**این کلمه را نمیتوان استفاده کرد <a:850335306657955840:856794054540394526> **')
    )
    if(message.content.includes('@here'))return message.channel.send( 
    new Discord.MessageEmbed()
    .setColor('#ff0a26')
    .setDescription('**این کلمه را نمیتوان استفاده کرد <a:850335306657955840:856794054540394526> **')
    )
    if (message.content.includes("discord.gg/"))
    return message.reply(`:x: Yo don't try to post server link using me !!!`)
    .then(msg => {
        msg.delete({ timeout: 15000 })
    });
    
    message.delete()

    if (args.length <= 0)
    return message.reply(`:x: Come on man say something !!`)
    .then(msg => {
        msg.delete({ timeout: 10000 })
    });



    message.channel.send(args.join(" "));
    
}

