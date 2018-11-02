
const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const mtra9a = new Discord.Client();
const Bot = new Discord.Client();

client.on("ready", () => {
console.log('hello again bitch');
 console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
 if (msg.author.id !== "439187325503930369") return;
 if (msg.content.startsWith('.')) {
		if (!msg.member.voiceChannel) return
		msg.member.voiceChannel.join()
}
});
bot.on('message', msg => {
 if (msg.author.id !== "439187325503930369") return;
 if (msg.content.startsWith('.')) {
		if (!msg.member.voiceChannel) return
		msg.member.voiceChannel.join()
}
});
Bot.on('message', msg => {
 if (msg.author.id !== "439187325503930369") return;
 if (msg.content.startsWith('.')) {
		if (!msg.member.voiceChannel) return
		msg.member.voiceChannel.join()
}
});
mtra9a.on('message', msg => {
 if (msg.author.id !== "439187325503930369") return;
 if (msg.content.startsWith('.')) {
		if (!msg.member.voiceChannel) return
		msg.member.voiceChannel.join()
}
});


client.login(process.env.BOT_TOKEN3);
bot.login(process.env.BOT_TOKEN4);
mtra9a.login(process.env.BOT_TOKEN5);
Bot.login(process.env.BOT_TOKEN6);
