const Cluster = require("discord-hybrid-sharding");
module.exports = async (client ,e) => {
    client.user.setActivity(`Cluster ID : ` + client.cluster.id)
    console.log(`\x1b[47m\x1b[30m ID:${client.cluster.id} User ${client.user.username}#${client.user.discriminator} guilds.cache.size: ${client.guilds.cache.size}` + " \x1b[0m")
};
