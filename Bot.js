const Cluster = require("discord-hybrid-sharding");
const Discord = require("discord.js");
const fs = require('fs');
const { config } = require("process");
let {token , AdvancedLogging} = require("./config.json");
const client = new Discord.Client({
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'],
    shards: Cluster.data.SHARD_LIST,
    shardCount: Cluster.data.TOTAL_SHARDS,
});
client.commands = new Discord.Collection();


const ProcesS = fs.readdirSync('./process').filter(file => file.endsWith('.js'));
for (const file of ProcesS) {
    const ProcesS = require(`./process/${file}`);
    process.on(file.split(".")[0], ProcesS.bind(null, client));
    if (AdvancedLogging == "true")
    {
        console.log(`\x1b[34mprocess.on "${file}" loaded!\x1b[0m`);
    }
};

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
    if (AdvancedLogging == "true")
    {
        console.log(`\x1b[33mclient.on "${file}" loaded!\x1b[0m`);
    }
};

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        client.commands.set(command.name.toLowerCase(), command);
        if (AdvancedLogging == "true")
        {
            console.log(`\x1b[32mCommand "${file}" loaded!\x1b[0m`);
        }
    };
});


client.cluster = new Cluster.Client(client);
client.login(token);
