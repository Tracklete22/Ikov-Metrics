import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { convertStringToHyphenated, convertStringToNormal, imageMap } from "../utils";
import TotalDropsMain from "../components/TotalDropsMain";
import SearchPanel from "../components/SearchPanel";

const Player = ({playersData}) => {

    // fetch player's data
    const {playername} = useParams()
    const rawPlayername = convertStringToNormal(playername)
    // find username in dict (needed to convert to normal str first, because the key is the user's real name, no the hyphenated version from useParams)
    const match = Object.keys(playersData).filter(key => key.toLowerCase() === rawPlayername.toLowerCase())[0];
    const data = playersData[match]

    // create frequency table for player
    var freq = {}
    if (data) {
        Object.keys(data).map(key => {
            let itemName = key.replace(/\s+/g, "-").toLowerCase()
            freq[key] = {
                id: itemName,
                img: undefined,
                num: data[key].length
            }
            if (itemName in imageMap) {
                freq[key].img = imageMap[itemName]
            }
        })
    }

    //  split frequencies between tob & cox to pass to the <totalDropsMain /> component which will display the number of drops for each raid type

    var freqTob = {}
    var freqCox = {}

    const TOB_ITEMS = ["Scythe of vitur (uncharged)", "Avernic defender hilt", "Justiciar legguards", "Justiciar chestguard", "Justiciar faceguard", "Amulet of souls", "Sanguine ornament kit",
                 "Sanguinesti staff (uncharged)", "Sanguine dust", "Sanguine justiciar kit"," Holy ornament kit", "Plank"]
    const COX_ITEMS = ["Twisted bow", "Elder maul", "Anguish prayer scroll", "Torment prayer scroll", "Dinh's bulwark", "Dragon hunter crossbow", "Kodai insignia", "Ancestral hat", 
                 "Ancestral robe top", "Ancestral robe bottom", "Twisted buckler"]
    
    Object.keys(freq).map(key => {
        if (TOB_ITEMS.includes(key)) {
            freqTob[key] = freq[key]
        } if (COX_ITEMS.includes(key)) {
            freqCox[key] = freq[key]
        }
    })

    return (
        <div>
           <Navbar />
           <div class="container">
            <div class="header">
                <h1 class="player-name">{rawPlayername}</h1>
            </div>
            <div class="content-wrapper">
                <div class="image-wrapper">  
                    <img class="player-img" src="https://www.steven.dog/assets/img/7f0b57c87791da3b19f7096eea8875c4.gif" alt="Player Avatar"/>
                </div>
                <SearchPanel playersData={playersData} />
                <div class="stats-wrapper">
                <TotalDropsMain tobFrequencies={freqTob} coxFrequencies={freqCox}/>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Player