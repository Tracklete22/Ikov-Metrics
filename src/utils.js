import imgs from "./images";

// format timestamp dates
export const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(2);
    const formattedDate = `${month}/${day}/${year}`;
    return [time, formattedDate];
}

// parse out player name from string
export const getPlayerNameFromObject = (str) => {
    const index = str.indexOf("received 1 x");
    const name = str.substring(0, index).replace(/`/g, "").trim();
    return name
}

export const convertStringToNormal = (str) => {
    return str.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
}

export const convertStringToHyphenated = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-")
}

export const convertHyphenatedStringToNormal = (str) => {
    const normalizedStr = str.toLowerCase().replace(/-/g, " ");
    return normalizedStr.charAt(0).toUpperCase() + normalizedStr.slice(1);
}

export const convertDecimalToFraction = (decimal) => {
    const numerator = 1
    const denominator = (1 / decimal).toFixed(1)
    return numerator + " / " + denominator
}

// used to attach images to each item in the table
export const imageMap = {
    "amulet-of-souls": imgs["amulet-of-souls.png"],
    "avernic-defender-hilt": imgs["avernic.png"],
    "justiciar-chestguard": imgs["justiciar-chestguard.png"],
    "justiciar-faceguard": imgs["justiciar-faceguard.png"],
    "justiciar-legguards": imgs["justiciar-legguards.png"],
    "plank": imgs["plank.png"],
    "sanguine-dust": imgs["sanguine-dust.png"],
    "sanguine-justiciar-kit": imgs["sanguine-justiciar-kit.png"],
    "sanguine-ornament-kit": imgs["sanguine-ornament-kit.png"],
    "sanguinesti-staff-(uncharged)": imgs["sang-staff.png"],
    "scythe-of-vitur-(uncharged)": imgs["scythe-of-vitur.png"],
    "twisted-bow": imgs["twisted-bow.png"],
    "elder-maul": imgs["elder-maul.png"],
    "anguish-prayer-scroll": imgs["dex-scroll.png"],
    "torment-prayer-scroll": imgs["arcane-scroll.png"],
    "twisted-buckler": imgs["twisted-buckler.png"],
    "dragon-hunter-crossbow": imgs["dhcb.png"],
    "dinh's-bulwark": imgs["bulwark.png"],
    "ancestral-hat": imgs["ancestral-hat.png"],
    "ancestral-robe-top": imgs["ancestral-top.png"],
    "ancestral-robe-bottom": imgs["ancestral-bottoms.png"],
    "kodai-insignia": imgs["kodai.png"],
}