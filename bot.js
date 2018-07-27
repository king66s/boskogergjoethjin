const Discord = require('discord.js');
const PREFIX = "$"
const KiNg66S = new Discord.Client();



KiNg66S.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "441683368418082836") return;

  
  if (message.content.startsWith(PREFIX + 'setwatch')) {
            message.delete()

  KiNg66S.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
} 

 
  if (message.content.startsWith(PREFIX + 'setlis')) {
               message.delete()

  KiNg66S.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
} 


if (message.content.startsWith(PREFIX + 'setname')) {
             message.delete()

  KiNg66S.user.setUsername(argresult).then
} 

if (message.content.startsWith(PREFIX + 'setavatar')) {
             message.delete()

  KiNg66S.user.setAvatar(argresult);
}

if (message.content.startsWith(PREFIX + 'setstream')) {
             message.delete()

  KiNg66S.user.setGame(argresult, "https://www.twitch.tv/KiNg66S");
     console.log('test' + argresult);
} 
if (message.content.startsWith(PREFIX + 'setplay')) {
             message.delete()

  KiNg66S.user.setGame(argresult);
     console.log('test' + argresult);
} 



});

KiNg66S.login(process.env.BOT_TOKEN);
