import React, {useState} from "react";
import SearchPanel from "../components/SearchPanel";
import TotalDropsMain from "../components/TotalDropsMain";
import RecentItems from "../components/RecentItems";
import Leaderboard from "../components/Leaderboard";
import Navbar from "../components/Navbar";
import { convertStringToHyphenated, convertStringToNormal, imageMap } from "../utils";
import imgs from "../images/";

const Leaderboards = ({playersData, tobFrequencies, coxFrequencies}) => {

    // track currently selected leaderboard item
    const [itemImg, setItemImg] = useState(imgs['plank.png'])
    const [item, setItem] = useState('Plank')
    const totalFrequencies = {...tobFrequencies, ...coxFrequencies}

    // fill <select> options so that user can select an item
    const options = Object.keys(totalFrequencies).map(option => {
        const itemName = convertStringToNormal(option)
        return (
            <option value={itemName}>{itemName}</option>
        )
    })

    const handleItemChange = (option) => {
        let item = convertStringToHyphenated(option)
        setItemImg(imageMap[item])
        setItem(option)
    }
    // TODO: FIX GHRAZI
    // TODO: FIX GHRAZI
    // TODO: FIX GHRAZI
    // TODO: FIX GHRAZI
    
    return (
        <div className="leaderboards-page-wrapper">
            <Navbar />
            <h1 className="leaderboards-page-header">{item}</h1>
            <div className="leaderboards-content-wrapper">
                <Leaderboard playersData={playersData} item={item} img={itemImg} />
                <div className="leaderboard-selector-wrapper">
                    <div className="select-wrapper">
                        <select className="select" onChange={(e) => handleItemChange(e.target.value)}>
                            {options}
                        </select>
                        <div className="select-arrow"></div>
                    </div>
                    <img src={itemImg} className="leaderboard-selector-img"/>
                </div>
            </div>
        </div>
    )
}

export default Leaderboards