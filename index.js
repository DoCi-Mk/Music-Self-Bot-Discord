const { MessageEmbed } = require("discord.js-self");
const Discord = require("discord.js-self");
const fs = require("fs");
require("dotenv").config();

const client = new Discord.Client();
const config = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
};

let token = process.env.TOKEN
let prefix = process.env.PREFIX
client.config = config;
client.queue = new Map();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[Command Manager]: Loading Command ${commandName}`);
    client.commands.set(commandName, props);
  });
});


client.on('ready', () => {
	console.log(`Succes Login To ${client.user.tag}! \n Prefix is ${prefix}`);
	client.user.setPresence({
	  status: 'dnd',
	  activity: {
		  name: `YOUR STATUS`,
		  type: 'LISTENING',
	  }
	})
});


//=====================CHanege Profile========================


client.on("message", (message) => {

  if (message.content.startsWith(prefix + 'profile')) {
    image = message.attachments.first().url;
    client.user.setAvatar (image);
    return message.channel.send(
      new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Profile Has Been Changed ✅')
      .setImage(image)
    )
  }
  
  
//========================Join To Voice ========================================
const vc_error = new Discord.MessageEmbed()
 
if (!message.content.startsWith(prefix) || message.author.bot) return;
    const VC = message.content.slice(prefix.length).trim().split(' ');
    const command = VC.shift().toLowerCase();  
    const channel = client.channels.cache.get(`${VC}`);
    if (command === `join`){
    if (!channel) return message.channel.send('**Please Use `VOICE-ID`');
    channel.join().then(connection => {
    connection.voice.setSelfDeaf(false);//You Can Changed To True Or False
    connection.voice.setSelfMute(false);
    message.channel.send('Succes ✅ Bot Join To Vocie')
    }).catch(e => {
    const errormsg = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('ERROR :x:')
    .setDescription('```js\n' + e + '\n```')
    message.channel.send(errormsg);
  });
}
});


//==================24/7 Join The Channel =======================Disconnect Nemishe
client.on('ready', () => {
  console.log(`${client.user.tag} Online Shod`);
  setInterval(() => {
      const channel = client.channels.cache.get("931167615118876692");
      if (!channel) return console.error("Channeli Vojod Nadarad");
      channel.join().then(connection => {
          console.log("Bot Be Channel Join Shod");
           connection.voice.setSelfDeaf(true);//You Can Changed To True Or False
           connection.voice.setSelfMute(true);
      }).catch(e => {

          console.error(e);
      })
  }, 5000); //Time Reconnect Shodan Yani Age Dc She Bad Masalan 3s Barmigarde Voice
});


  

client.login(token);
