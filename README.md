# Dialogflow to Discord
A small Discord bot built using the Discord.js library with a Dialogflow (formerly Api.ai) integration, allowing the bot to utilise natural language processing to carry out natural souding conversations, execute user-defined commands ,and overall, have your very own chill SkyNet.

Although Dialogflow has a one-click-to-deploy option on few platforms, Discord is not included, this is more or less of a *template* to get you started on the right path to creating your own bot.

# Installing
* Run the following command to clone the repo onto your local machine, including all the dependencies
```
git clone https://github.com/NaughtyPotato/dialogflow-to-discord.git
```

## Dependencies
All the dependencies should be updated, but i recommend installing them fresh just to be safe
* Install [Node.js](https://nodejs.org/en/) to use `npm`:

* [Dialogflow (Api.ai)](https://github.com/dialogflow/dialogflow-nodejs-client)
```
npm install apiai
```
* [Discord.js](https://github.com/discordjs/discord.js)
```
npm install discord.js
```
* [Uuid](https://github.com/kelektiv/node-uuid)
```
npm install uuid
```

# Usage
To have a better understanding on API's used for this project i recommend reading the documentation :
* Discord.js [Documentation](https://discord.js.org/#/docs/main/stable/general/welcome)
* Dialogflow [Documentation](https://dialogflow.com/docs)

## SetUp
* To get started, we need to setup a [Dialogflow agent](https://dialogflow.com/) and a [Discord bot](https://discordapp.com/developers/applications/).
* Get the `Client access token` for your Dialogflow agent 

![alt text](https://dialogflow.com/docs/images/references/api-reference/001-authentication.png)

* Get the `Token` for you Discord bot 

![alt text](https://i.imgur.com/X9DLswn.png)

## Edit 
`main.js` grants full access to the bot and it's functionalities, you can use is as is, or edit it to fit your needs.
```Javascript
// -- Dialogflow meta data -- 
const Apiai = require('apiai');                                         //Reference to the Dialogfow package
const Apiai_Client = Apiai('<Client Access Token>');                    //Your client access token to call for your Dialogflow agent
const sessionuuid = require('uuid/[v1]/[v2]/[v3]/[v4]/[v5]');
sessionuuid();                                                          //Generate a uuid to be used as a sessionId

// -- Discord meta data -- 
const Discord = require('discord.js');
const Discord_Client = new Discord.Client();

    //.............................
    //
    //Code for Bot functionalities
    //
    //.............................

Discord_Client.login('<Discord Bot Token>');                            //Your bot token to call for your Discord bot
```
## Deployment
Run the folowing command and update `package.json`
```
nmp init
```

To run the bot, execute the folowing command
```
node main.js
```

# Creators
* [NaughtyPotato](https://github.com/NaughtyPotato) - Riad Takdenti

# License
This project is under Apache License 2.0 - See [License](https://github.com/NaughtyPotato/dialogflow-to-discord/blob/master/LICENSE)

# Acknowledgments
* A big thank you to everyone who's code was used for this project.
* Lots of love for any contributors to this open source project.