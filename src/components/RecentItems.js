import React from "react";
import { formatTimestamp, getPlayerNameFromObject } from "../utils";
import { imageMap } from "../utils";

const RecentItems = ({totalTobUniques, totalCoxUniques}) => {
    
    // we only want the 10 most recent items, so only get a small subset of the total data
    // "worst" case scenario, one of either of the lists will contain all of the 10 most recent items, so fetch 10 most recent items from both lists
    const recentTobItems = totalTobUniques.slice(0, 10)
    const recentCoxItems = totalCoxUniques.slice(0, 10)
    var recentItems = recentTobItems.concat(recentCoxItems)
    recentItems = recentItems.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)).slice(-10)
    
    // generate list of recent item drops
    const recentItemElements = recentItems.map(item => {
        // get date info
        let timestamp = formatTimestamp(item.timestamp)
        let time = timestamp[0]
        let date = timestamp[1]
        // get item image
        let itemNameHyphenated = (item.embeds[0].author.name).toLowerCase().replace(/\s+/g, "-")
        let itemImage = imageMap[itemNameHyphenated]
        // get item name
        let itemName = item.embeds[0].author.name
        // get player name
        let playerNameUnparsed = (item.embeds[0].fields[0].value)
        let playerName = getPlayerNameFromObject(playerNameUnparsed)
        //let playerName = getPlayerNameFromObject(playerNameUnparsed)
        return (
            <div className="recent-item-row">
                <div>
                    <span>{time}</span>
                    <span>{date}</span>
                </div>
                <img className="icon_small" src={itemImage}/>
                <p className="recent-item_item-name">{itemName}</p>
                <p className="recent-item_player-name">{playerName}</p>
            </div>
        )
    })
    
    return (
        <div className="recent-items-wrapper">
            <div className="panel-header-bg">
                <h2>Recent Items</h2>
            </div>
            <div className="recent-items-list">
                {recentItemElements}
            </div>
        </div>
    )
}

export default RecentItems