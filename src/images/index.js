// import many files at once
const imagefileNames = [
    'verzik.png',
    'amulet-of-souls.png',
    'avernic.png',
    'justiciar-chestguard.png',
    'justiciar-faceguard.png',
    'justiciar-legguards.png',
    'plank.png',
    'sanguine-dust.png',
    'sanguine-justiciar-kit.png',
    'sanguine-ornament-kit.png',
    'sang-staff.png',
    'scythe-of-vitur.png',
    'olm.png',
    'twisted-bow.png',
    'elder-maul.png',
    'dex-scroll.png',
    'arcane-scroll.png',
    'twisted-buckler.png',
    'dhcb.png',
    'bulwark.png',
    'ancestral-hat.png',
    'ancestral-top.png',
    'ancestral-bottoms.png',
    'kodai.png'
]

const imgs = {}
for (let i = 0; i < imagefileNames.length; i++) {
    const filename = imagefileNames[i]
    const image = require(`../images/${filename}`)
    imgs[filename] = image
}

export default imgs
