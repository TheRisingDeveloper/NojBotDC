if(message.content.startsWith(`${prefix}`)){
    let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
    let removeExc = message.content.slice(1);

    message.channel.send(removeExc);

    if (removeExc == "time"){
        message.channel.send("The time is " + hour + ":" + minute + " UTC");

    }
    if (removeExc == "kick"){
        if (mod){
            message.channel.send("Kicked");
        }
        else {
            message.channel.send(message.member + " you do not have perms to do this.");
        }

    }
}