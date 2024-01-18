import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { convertStringToHyphenated } from "../utils";

const SearchPanel = ({playersData}) => {

    const [searchInput, setSearchInput] = useState('')
    const [user, setUser] = useState('')

    // add separate object for lowercase name variants, to make searches case insenitive
    const lowercasePlayersData = {}
    for (let key in playersData) {
        lowercasePlayersData[key.toLowerCase()] = playersData[key]
    }
    
    const navigate = useNavigate()

    const handleClick = (input) => {
        if (input in playersData || input in lowercasePlayersData) {
            const hyphenatedName = convertStringToHyphenated(input)
            navigate(`/player/${hyphenatedName}`)
        } else {
            return undefined
        }
    }

    return (
        <div className="search-wrapper">
            <input type="text" placeholder="enter player name to get details..." onChange={(e) => setSearchInput(e.target.value)}/>
            <button className="search-button" onClick={() => handleClick(searchInput)}>Search</button>
        </div>
    )
}

export default SearchPanel