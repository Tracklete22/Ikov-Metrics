import React, {useEffect, useState} from "react";
import { convertDecimalToFraction } from "../utils"
import images from "../images"

const Weightings = ({frequencies}) => {

    // TODO: print rates for each item

    let numPlanks = frequencies['plank']?.num || 0 // we want to subtract the "plank" item from the total count because these aren't a valuable drop from a raid. They are simply an item given to a player who dies a lot during a raid
    let totalDrops = Object.keys(frequencies).reduce((acc, key) => acc + frequencies[key].num, 0) - numPlanks

    const raidItems = Object.keys(frequencies).map(key => {
        let itemImg = frequencies[key].img
        let itemDropCount = frequencies[key].num
        let itemDropRateAsFraction = convertDecimalToFraction(itemDropCount / totalDrops)
        return (
            <div className="weightings-item yellow">
                <img className="total-drops-img" src={itemImg} alt="Item" />
                <p className="drop-rate">{itemDropRateAsFraction}</p>
            </div>
        )
    })    
   
    return (
        <div className="weightings-wrapper">
            {raidItems}
        </div>
    )
}

export default Weightings