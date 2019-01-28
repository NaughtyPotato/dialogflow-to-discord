const Discord = require('discord.js');
const client = new Discord.Client();

const apiai = require('apiai');
const app = apiai("14d63ca0296e4ce6ae203d209af6bb94");

client.on('ready', () => {
    console.log(client.user.tag,new Date());
});

client.on('message', message => {
    
    if(message.content != null && message.author.bot == false){

        var request = app.textRequest(message.content, {
            sessionId: '1'
        });

        request.on('response', response => {
            console.log(response);
            var respond = response.result.fulfillment.speech;
            var stringRespond = JSON.stringify(respond);
            stringRespond = stringRespond.substring(1,stringRespond.length -1);
            message.channel.send(stringRespond);
        });

        request.on('error', error => {
            console.log(error);
        });
    
        request.end();
    }
});

client.login('MzczNTg4NTU3ODAzMjkwNjQz.DzEC9g.sKudWrCUYCrwHIM3y3GdhDyIuIE');