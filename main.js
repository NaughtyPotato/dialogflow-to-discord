//#region -- meta data --

//Discord.js meta data
const Discord = require('discord.js');
const Discord_Client = new Discord.Client();

//Apai.ai meta data
const Apiai = require('apiai');
const Apiai_Client = Apiai(process.env.dialogflow_token);
const sessionuuid = require('uuid/v1');
sessionuuid(); //Generate a uuid to be used as api.ai sessionId

//#endregion

Discord_Client.on('ready', () => {
    console.log(Discord_Client.user.tag,new Date(),sessionuuid()); //Console Log -BotName #0000- -Time of Log in- -sessionId-

    Discord_Client.user.setPresence({
        game: { 
            name: "With Lizzie ;)",
            type: 'PLAYING'
        },
        status: 'online'
    })
});

Discord_Client.on('message', message => {
    
    if(message.content != null && !message.author.bot){

        var request = Apiai_Client.textRequest(message.content, {
            sessionId: sessionuuid()
        });

        request.on('response', response => {
            console.log(response); //Console Log response data in JSON format

            var respond = JSON.stringify(response.result.fulfillment.speech);
            respond = respond.substring(1,respond.length -1);
            message.channel.send(respond);
        });

        request.on('error', error => {
            console.log(error); //Console Log any errors
        });
    
        request.end();
    }
});

Discord_Client.login(process.env.discord_token);