const Help = require("./help.js");
const enchantCommands = ["info", "type" , "maxlvl", "tier", "help", "list"];
//const enchantGem  = []
let enchantGem = [
    {
        name: "Abyssal Wrath",
        type: "All Armor",
        maxLvl: 4,
        info: "Temporarily freeze all nearby enemies, pushing them away and causing wrath damage.",
        tier: "Boss"
    },
    {
        name : "Bleed",
        type : "Swords",
        maxLvl : 6,
        info : "A chance to inflict enemy players with Bleed.",
        tier : "Boss"
    },
    {
        name : "Chain Lifesteal",
        type : "All Armor",
        maxLvl : 5,
        info : "A chance to regain health from multiple players near your damaged target based on level.",
        tier : "Boss"
    },
    {
        name : "Infectious",
        type : "Chestplates",
        maxLvl : 3,
        info : "A chance to spread a deadly infection when damaged.",
        tier : "Boss"
    },
    {
        name : "Mind Rot",
        type : "All Weapons",
        maxLvl : 6,
        info : "Chance to mark the enemy with Mind Rot, while marked all incoming damage will be increased. (A player can only be marked once every 5s)",
        tier : "Boss"
    },
    {
        name : "Mob Aura",
        type : "Axes",
        maxLvl : 4,
        info : "Increased damage dealt to Mob Spawner mobs. (Does NOT work on Dead Zone Mobs or adventure mobs)",
        tier : "Boss"
    },
    {
        name : "Nether Breaker",
        type : "Pickaxes",
        maxLvl : 1,
        info : "Grants the ability to break Obsidian, and have an increased block respawn time inside of the Dead Zone.",
        tier : "Boss"
    },
    {
        name : "Rage",
        type : "Swords",
        maxLvl : 6,
        info : "For every combo hit you land, your damage is multiplied (up to 1.75x).",
        tier : "Boss"
    },
    {
        name : "Rot N' Decay",
        type : "All Armor",
        maxLvl : 10,
        info : "Decay the world around you, increasingly damaging the health and durability of the enemies standing on the decayed blocks. Also spawns Rotten Corpses that deal massive durability damage to enemy players on contact.",
        tier : "Boss"
    },
    {
        name : "Deathbringer",
        type : "All Armor",
        maxLvl : 3,
        info : "A chance to deal double damage.",
        tier : "Legendary"
    },
    {
        name : "Double Strike",
        tier : "Legendary",
        type : "Swords",
        maxLvl : 3,
        info : "Chance to strike your enemy twice."
    },
    {
        name : "Enlighted",
        tier : "Legendary",
        type : "All Armor",
        maxLvl : 3,
        info : "Can heal hearts while taking damage."
    },
    {
        name : "Gem Finder",
        tier : "Legendary",
        type : "Pickaxes",
        maxLvl : 3,
        info : "Increase the chance to discover a Mystery Enchant Gem when manually mining Resource Nodes."
    },
    {
        name : "Gold Finder",
        tier : "Legendary",
        type : "Pickaxes",
        maxLvl : 3,
        info : "A chance to find gold scraps when mining Resource Nodes."
    },
    {
        name : "Guardians",
        tier : "Legendary",
        type : "All Armor",
        maxLvl : 10,
        info : "Chance to spawn guardians to assist you when damaged by a player."
    },
    {
        name : "Injury",
        tier : "Legendary",
        type : "Axes",
        maxLvl : 6,
        info : "Applies injury stacks to enemies that decrease their movement speed."
    },
    {
        name : "Inquisitive",
        tier : "Legendary",
        type : "Swords",
        maxLvl : 5,
        info : "A chance to gain increased EXP when killing a mob."
    },
    {
        name : "Leadership",
        tier : "Legendary",
        type : "All Armor",
        maxLvl : 5,
        info : "The more allies near you, the more damage you deal against players."
    },
    {
        name : "Lifesteal",
        tier : "Legendary",
        type : "Swords",
        maxLvl : 5,
        info : "A chance to siphon HP from your target."
    },
    {
        name : "Loot Magnet",
        tier : "Legendary",
        type : "All Weapons",
        maxLvl : 3,
        info : "Chance to auto-loot mob spawner mob drops."
    },
    {
        name : "Lucky",
        tier : "Legendary",
        type : "All Armor",
        maxLvl : 10,
        info : "You will find yourself more lucky in all cosmic situations."
    },
    {
        name : "Overload",
        tier : "Legendary",
        type : "All Armor",
        maxLvl : 3,
        info : "Increase Max Health based on level."
    },
    {
        name : "Potion Block",
        tier : "Legendary",
        type : "Axes",
        maxLvl : 3,
        info : "Chance to prevent damaged players from using potions for a brief duration."
    },
    {
        name : "Surgical Saw",
        tier : "Legendary",
        type : "Axes",
        maxLvl : 4,
        info : "Multiplies damage dealt to players with active injury stacks from the Injury enchantment."
    },
    {
        name : "Tombstone",
        tier : "Legendary",
        type : "All Armor",
        maxLvl : 4,
        info : "Chance to drop anvils on nearby enemies that damage their armor by at least 10%."
    },
    {
        name : "Vengeance",
        tier : "Legendary",
        type : "Swords",
        maxLvl : 6,
        info : "Multiply your outgoing damage by the amount of Injury stacks you are currently affected by."
    },
    {
        name : "XP Discovery",
        tier : "Legendary",
        type : "Pickaxes",
        maxLvl : 5,
        info : "Chance to mine up EXP from Resource Nodes."
    },
    {
        name : "Adrenaline Rush",
        tier : "Rare",
        type : "Helmets, Boots",
        maxLvl : 3,
        info : "Receive a speed and health boost when you're face to face with death."
    },
    {
        name : "Anti Axe",
        tier : "Rare",
        type : "All Armor",
        maxLvl : 4,
        info : "Decreases damage from enemy axes, scaling with level."
    },
    {
        name : "Anti Sword",
        tier : "Rare",
        type : "All Armor",
        maxLvl : 4,
        info : "Decreases damage from enemy swords, scaling with level."
    },
    {
        name : "Armor Rot",
        tier : "Rare",
        type : "Swords",
        maxLvl : 4,
        info : "Increases durability loss on your enemy's armor."
    },
    {
        name : "Blacksmith",
        tier : "Rare",
        type : "Swords",
        maxLvl : 5,
        info : "Chance to regenerate durability on your most damaged piece of armor by 1-2 durability whenever you damage a player, but when activated your attack deals 50% of the normal damage."
    },
    {
        name : "Boss Slayer",
        tier : "Rare",
        type : "Axes",
        maxLvl : 3,
        info : "Deal increased damage to Elites and Boss mobs."
    },
    {
        name : "Cleave",
        tier : "Rare",
        type : "Axes",
        maxLvl : 7,
        info : "Damage players within an increasing radius depending on enchantment level."
    },
    {
        name : "Dodge",
        tier : "Rare",
        type : "All Armor",
        maxLvl : 5,
        info : "Chance to dodge attacks."
    },
    {
        name : "Dominate",
        tier : "Rare",
        type : "Swords",
        maxLvl : 4,
        info : "Chance to weaken enemy players on hit, causing them to deal (level x 5%) less damage to players for (level x 2) seconds."
    },
    {
        name : "Electrify",
        tier : "Rare",
        type : "All Armor",
        maxLvl : 4,
        info : "Chance to strike lightning on the attacking player."
    },
    {
        name : "Fanatic",
        tier : "Rare",
        type : "Axes",
        maxLvl : 5,
        info : "Deal increased DMG to enemy players that are wielding an axe."
    },
    {
        name : "Haste",
        tier : "Rare",
        type : "Pickaxes",
        maxLvl : 3,
        info : "Allows you to swing your tools faster."
    },
    {
        name : "Implants",
        tier : "Rare",
        type : "Helmets",
        maxLvl : 3,
        info : "Passively regen +1 HP and +1 hunger every few seconds."
    },
    {
        name : "Metaphysical",
        tier : "Rare",
        type : "Boots",
        maxLvl : 4,
        info : "A chance to resist the slowness given by enemy Trap and Paralyze."
    },
    {
        name : "Money Miner",
        tier : "Rare",
        type : "Pickaxes",
        maxLvl : 4,
        info : "Chance to yield money when mining Resource Nodes."
    },
    {
        name : "Ore Magnet",
        tier : "Rare",
        type : "Pickaxes",
        maxLvl : 5,
        info : "Chance to receive more resource scraps."
    },
    {
        name : "Silence",
        tier : "Rare",
        type : "Swords",
        maxLvl : 4,
        info : "Chance to prevent activation of your enemies custom enchants."
    },
    {
        name : "Angelic",
        tier : "Elite",
        type : "All Armor",
        maxLvl : 5,
        info : "Chance to heal health over time after being damaged."
    },
    {
            name : "Anti Gank",
        tier : "Elite",
        type : "Axes",
        maxLvl : 4,
        info : "If (6-level) or more enemies hit you in a short period of time, your outgoing damage will be multiplied by up to 1.5x depending on the amount of enemies nearby."
    },
    {
        name : "Auto Smelt",
        tier : "Elite",
        type : "Pickaxes",
        maxLvl : 3,
        info : "A chance to get the full scrap when mining Scrap Shards."
    },
    {
        name : "Danger Close",
        tier : "Elite",
        type : "Swords",
        maxLvl : 5,
        info : "The closer you are to the enemy monster, the more damage you will deal. However, if you are more than 2.5 blocks away, you will deal LESS damage than normal."
    },
    {
        name : "Execute",
        tier : "Elite",
        type : "Swords",
        maxLvl : 5,
        info : "Chance to deal massive damage on low health enemy players."
    },
    {
        name : "Grounded",
        tier : "Elite",
        type : "All Armor",
        maxLvl : 5,
        info : "Greatly reduce knockback taken from the Shockwave enchantment and Shockwave Slime pet."
    },
    {
        name : "Hijack",
        tier : "Elite",
        type : "All Weapons",
        maxLvl : 5,
        info : "Chance to hijack another players Guardians or Rot n Decay minions."
    },
    {
        name : "Icy Veins",
        tier : "Elite",
        type : "All Armor",
        maxLvl : 3,
        info : "Chance to cause slowness to your attacker."
    },
    {
        name : "Last Stand",
        tier : "Elite",
        type : "Helmets",
        maxLvl : 4,
        info : "Chance to negate 50% of damage from incoming attacks that would normally kill you."
    },
    {
        name : "Paralyze",
        tier : "Elite",
        type : "Axes",
        maxLvl : 4,
        info : "Chance to give lightning affect as well as to give slowness and slow swinging to the target player, inflicting small damage on proc."
    },
    {
        name : "Replenish",
        tier : "Elite",
        type : "Pickaxes",
        maxLvl : 5,
        info : "Chance to instantly replenish resource nodes when mined."
    },
    {
        name : "Shockwave",
        tier : "Elite",
        type : "Chestplates",
        maxLvl : 5,
        info : "A chance to knockback your attacker."
    },
    {
        name : "Spiked",
        tier : "Elite",
        type : "All Armor",
        maxLvl : 2,
        info : "Injures your attacker but does not affect your durability (does not refresh rage stacks)."
    },
    {
        name : "Telepathy",
        tier : "Elite",
        type : "Pickaxes",
        maxLvl : 4,
        info : "A chance to automatically pickup resource node drops when broken."
    },
    {
        name : "Trap",
        tier : "Elite",
        type : "Swords",
        maxLvl : 3,
        info : "A chance to apply a buffed slowness effect to your target."
    },
    {
        name : "Unkillable",
        tier : "Elite",
        type : "Helmets",
        maxLvl : 3,
        info : "Attacks that bring your HP to (level+4) hearts or lower have a chance to heal you for (level+5) hearts instead."
    },
    {
        name : "Berserk",
        tier : "Uncommon",
        type : "Axes",
        maxLvl : 5,
        info : "A chance to get a burst of strength 1-2 depending on level (and mining fatigue)."
    },
    {
        name : "Blood Transfusion",
        tier : "Uncommon",
        type : "Axes",
        maxLvl : 1,
        info : "Reduce your own Injury Stacks when applying Injury to an enemy."
    },
    {
        name : "Experience",
        tier : "Uncommon",
        type : "Pickaxes",
        maxLvl : 5,
        info : "Increased Island EXP when mining resource nodes."
    },
    {
        name : "Fast Swing",
        tier : "Uncommon",
        type : "Swords",
        maxLvl : 3,
        info : "A chance to give a burst of haste."
    },
    {
        name : "Fatigue",
        tier : "Uncommon",
        type : "Swords",
        maxLvl : 5,
        info : "Chance to give slowness, slow swinging and confusion to players."
    },
    {
        name : "Headless",
        tier : "Uncommon",
        type : "All Weapons",
        maxLvl : 3,
        info : "Chance to loot your victims head on death."
    },
    {
        name : "Light Forged",
        tier : "Uncommon",
        type : "All Armor",
        maxLvl : 4,
        info : "Chance to take 4x durability loss but heal for 1 HP when taking damage."
    },
    {
        name : "Lifebloom",
        tier : "Uncommon",
        type : "All Armor",
        maxLvl : 5,
        info : "Completely heals allies and truces on death."
    },
    {
        name : "Molten",
        tier : "Uncommon",
        type : "All Armor",
        maxLvl : 3,
        info : "Chance to set your attacker on fire."
    },
    {
        name : "Plague Carrier",
        tier : "Uncommon",
        type : "All Armor",
        maxLvl : 8,
        info : "When near death summons creepers and debuffs to avenge you."
    },
    {
        name : "Reforged",
        tier : "Uncommon",
        type : "Pickaxes",
        maxLvl : 10,
        info : "Protects tool durability, items will take longer to break."
    },
    {
        name: "Well Fed",
        tier: "Uncommon",
        type: "All Armor",
        maxLvl: 3,
        info: "Increased Hunger Replenishment."
    }

];


// using switch / case
function enchantCommand(message) {
    let stdMessage = toStandardName(message[1]);
    if (enchantCommands.includes(stdMessage)){
        switch (stdMessage) {
            case "info":
                return getInfo(message);
            case "tier":
                return getTier(message);
            case "maxlvl":
                return getMaxLvl(message)
            case "type":
                return getType(message)
            case "help":
                return Help.helpCenter(message);
            case "list":
                return getList(message);
            default:
                return "not an info command!";
        }
        //using if statements
        // if (stdMessage === "info") {
        //     return
        // }else if(stdMessage === "tier"){
        //     return getTier(message);
        // }else if(stdMessage === "maxlvl"){
        //     return getMaxLvl(message);
        // }else if(stdMessage === "type"){
        //     return getType(message);
        // }else if(stdMessage === "help"){
        //     return Help.helpCenter(message);
        // }else if(stdMessage === "list"){
        //     return getList(message);
        // }
        // else{
        //     return "not an info command!";
        // }
    } else {
        return "Enchantment Command not found";

    }
}
// turns enchantGen object into a list
// let gems = Object.keys(enchantGem);
 //console.log(gems);
function getType(gemName) {
    let location = getGemLocation(gemName);
    if (location != 999) {
        return "**" + enchantGem[location].name + "** can enchant " + enchantGem[location].type.toLowerCase() + ".";
    }
    return "Gem not found!"
}

function getMaxLvl(gemName) {
    let location = getGemLocation(gemName);
    if (location != 999) {
        return "**"+ enchantGem[location].name + "'s** maxium level is **" + enchantGem[location].maxLvl + ".**";
    }
    return "Gem not found!"
}

function getTier(gemName) {
   let location = getGemLocation(gemName);
        if (location != 999) {
            return "**" + enchantGem[location].name + "'s** tier is a **" + enchantGem[location].tier + "** gem.";
        }
    return "Gem not found!";
}

function getInfo(gemName) {
    let location = getGemLocation(gemName);
    if (location != 999) {
        return "**" + enchantGem[location].name + "'s** description:\n" + enchantGem[location].info;
    }
    return "Gem not found!";
}

function getGemLocation(gemName){
    let newGemName = toStandardName(gemName);
    let encGem;
    for (let i = 0; i < enchantGem.length; i++) {
        encGem = enchantGem[i].name;
        encGem = encGem.toLowerCase()
        encGem = toStandardName(encGem);
        console.log(encGem);
        console.log(newGemName);
        if (encGem === newGemName) {
            console.log(i);
            return i;
        }

    }
    return 999;
}

function  getList(){

    let gemList = "";
    let nextGem
    for (let gems in enchantGem){
        nextGem = enchantGem[gems].name;
        gemList = gemList + nextGem + " / ";
    }
    return gemList;
}


function toStandardName(name){
    let newName = name;

    if (typeof name === "object"){
        newName = newName.splice(2,newName.length - 2);
        newName = newName.toString();

    }

    for(let i = 0; i < newName.length ; i++){
        newName = newName.replace(",", "");
        newName = newName.replace(" ", "");
        newName = newName.replace("'", "");
    }

    console.log(newName)
    return newName;
}
module.exports = {enchantCommand};