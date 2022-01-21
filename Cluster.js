const Cluster = require("discord-hybrid-sharding");
let {token} = require("./config.json");
const fs = require('fs');
const manager = new Cluster.Manager(`${__dirname}/bot.js`,
{
totalShards: 2, //or 'auto'
shardsPerClusters: 2, 
//totalClusters: 4,
mode: "process" ,  //  process/worker
token: token,
})
manager.on('clusterCreate', cluster => console.log(`\x1b[35mLaunched Cluster ${cluster.id} \x1b[0m`));
manager.spawn({timeout: -1});

manager.on('debug', dbg => {
    console.log("\x1b[36m" +  dbg + "\x1b[0m")
})
