
const Discord = require("discord.js");
const {prefix, token} = require("./config.json")
const client = new Discord.Client();
const Enchants = require("./enchants.js");
const Help = require("./help.js");
const McSeverState = require("./minecraftServer.js");
const { MessageEmbed } = require("discord.js");
const commands = ["enchants", "kick" , "ban", "help", "server"];



client.once('ready', () => {
    console.log("Ready!");
    }
)
client.on("message", message => {
 function toEmbed(messageToEmbed, title, colour) {
     const embed = new MessageEmbed()
         // Set the title of the field
         .setTitle(title)
         // Set the color of the embed
         .setColor(colour)
         // Set the main content of the embed
         .setDescription(messageToEmbed);
     // Send the embed to the same channel as the message
         message.channel.send(embed);
 }

    if (message.content.startsWith(`${prefix}`)) {

        let commandLine = message.content.slice(1);
        commandLine = commandLine.toLowerCase();
        commandLine = commandLine.split(" ");
        console.log(commandLine);
        if (commands.includes(commandLine[0])) {
            if (commandLine[0] === "enchants") {
                toEmbed(Enchants.enchantCommand(commandLine), "Enchants",0xFF0000)
      //          message.channel.send(`${message.author},` + Enchants.enchantCommand(commandLine));
            } else if (commandLine[0] === "help") {
                toEmbed(Help.helpCenter(commandLine), "Help", 0x00FFFF)
       //         message.channel.send(`${message.author},` + Help.helpCenter(commandLine));
            } else if (commandLine[0] === "server") {
              //  toEmbed(McSeverState.<function>(commandLine), "List", 0x00FFFF)
                //         message.channel.send(`${message.author},` + Help.helpCenter(commandLine));
            } else {
                message.channel.send(`${message.author},` + "Unknown command do !help for more info!", );
            }
        }
    }
})


client.login(token);
