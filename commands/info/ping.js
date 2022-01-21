const ms = require('ms');
const Discord = require("discord.js");

module.exports = {
    name: 'ping',
    aliases: ["latency", "botlatency", "botping"],

    execute(client, message) {
        message.reply(`Last heartbeat was: **${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}** ago at **${client.ws.ping}ms**`)
    },
};