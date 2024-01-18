import React, {useEffect, useState} from "react";
import TotalDropsPanel from "./TotalDropsPanel";
import images from "../images"
import { imageMap } from "../utils";

const TotalDropsMain = ({tobFrequencies, coxFrequencies}) => {

    // fetch header images (located at top of table)
    const verzikImg = images['verzik.png']
    const olmImg = images['olm.png']
    
    return (
        <div className="total-drops-main__wrapper">
            <TotalDropsPanel name={"Theatre of Blood"} frequencies={tobFrequencies} img={verzikImg}/>
            <TotalDropsPanel name={"Chambers of Xeric"} frequencies={coxFrequencies} img={olmImg}/>
        </div>
    )
}

export default TotalDropsMain