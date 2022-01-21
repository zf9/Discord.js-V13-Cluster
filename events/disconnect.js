const fs = require('fs');
module.exports = async (client ,e) => {
    try {
        fs.appendFile('./Discord.Logs/disconnect.txt', e + "\n", function (err) {
    })
    } catch (err) {
        console.error(err)
    }
};