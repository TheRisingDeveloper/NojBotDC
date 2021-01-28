function helpCenter(message){
    let commandLine = message;
    if(commandLine.length === 1){
        return "Please us the command **!enchants help** for more info on enchantment help!"

    }else if(commandLine[1] === "enchants" || commandLine[0] === "enchants"){
        return "**!enchants info (Gem name)** returns the description of the enchantment.\n" +
            "**!enchants type (Gem name)** returns what it can be attached too.\n" +
            "**!enchants tier (Gem name)** returns the tier of socket required for the gem.\n" +
            "**!enchants maxlvl (Gem name)** returns the maximum level of the enchant.";
    }

}

module.exports = {helpCenter};