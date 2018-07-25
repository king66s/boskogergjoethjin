const Discord = require('discord.js');
const PREFIX = "#"
const fs = require('fs');
var prefix = "#";
const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)

});

client.on('ready', () => {
    console.log('Login as ' + client.user.tag)
})


 
client.on('guildMemberAdd', member => {
    member.createDM().then(member => {
        member.send(`:hearts:️:hearts:️ 
حياكّ الله بيننا يمكن الصدف تخلق كثير 
https://discord.gg/P6v7yvD
**[ ${member} ] الدعووه خاصهه لسموك يا**`)
    })
})
client.on('guildMemberRemove', member => {
    member.createDM().then(member => {
        member.send(`:hearts:️:hearts:️ 
حياكّ الله بيننا يمكن الصدف تخلق كثير 
https://discord.gg/P6v7yvD
**[ ${member} ] الدعووه خاصهه لسموك يا**`)
    })
})

client.login(process.env.BOT_TOKEN); 
