
const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const mtra9a = new Discord.Client();
//const Bot = new Discord.Client();

client.on("ready", () => {
console.log('hello again bitch');
 console.log(`Logged in as ${client.user.tag}!`);
});


client.login(process.env.BOT_TOKEN3);
bot.login(process.env.BOT_TOKEN4);
mtra9a.login(process.env.BOT_TOKEN5);
Bot.login(process.env.BOT_TOKEN6);
