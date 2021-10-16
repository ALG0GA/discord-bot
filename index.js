const Discord = require('discord.js');
const CronJob = require('cron').CronJob;

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const roleId = "773271217540825120";

client.once('ready', () => {

    var job = new CronJob('0 8 * * 6,0,2', function() {
        client.channels.cache.get("796780244777697331").send("<@&"+roleId+"> Pensez à répondre au calendrier :-)");
      }, null, true, 'Europe/Paris');
      job.start();
});
client.login(process.env.TOKEN);

