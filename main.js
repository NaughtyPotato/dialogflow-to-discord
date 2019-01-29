const Discord = require('discord.js');
const client = new Discord.Client();

const apiai = require('apiai');
const app = apiai(process.env.dialogflow_token);

client.on('ready', () => {
    console.log(client.user.tag,new Date());
    client.user.setActivity("With my larege mic!");
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

client.login(process.env.discord_token);