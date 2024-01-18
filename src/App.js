import './App.css';
import React, { useState, useEffect } from 'react';
import { getPlayerNameFromObject } from './utils';
import imgs from './images';
import Home from './pages/Home';
import Leaderboards from './pages/Leaderboards';
import Player from './pages/Player';
import { imageMap } from './utils';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [totalTobUniques, setTotalTobUniques] = useState([])
  const [totalCoxUniques, setTotalCoxUniques] = useState([])
  const [tobFrequencies, setTobFrequencies] = useState({})
  const [coxFrequencies, setCoxFrequencies] = useState({})
  const [playersData, setPlayersData] = useState({})

  // fetch data
  useEffect(() => {
    fetch('/tob.json')
      .then(res => res.json())
      .then(data => setTotalTobUniques(data))
    fetch('/cox.json')
      .then(res => res.json())
      .then(data => setTotalCoxUniques(data))
  }, [])

  // set the playerData state
  useEffect(() => {

    /**** SET THE PLAYERDATA STATE ****/

    // store item data for each player
    const playersDataInitial = {}
    const totalUniques = totalTobUniques.concat(totalCoxUniques)
    totalUniques.map(item => {
      let playerNameUnparsed = (item.embeds[0].fields[0].value)
      let playerName = getPlayerNameFromObject(playerNameUnparsed).trim()
      let itemName = item.embeds[0].author.name
      // outer key will be each player's name
      // if player has already been added, add the item item to their array
      if (playersDataInitial[playerName]) {
        // if player's array has already been initialized for that item, add th item to that array
        if (playersDataInitial[playerName][itemName]) {
          playersDataInitial[playerName][itemName].push(item)
        // if this is the player's first time seeing this item, add it to that player's array (array for that item)
        } else {
          playersDataInitial[playerName][itemName] = [item]
        }
      // if player hasn't been added yet, add them
      } else {
        playersDataInitial[playerName] = {}
      }
    })

    setPlayersData(playersDataInitial)

    /****  FETCH TOB FREQUENCY TABLE AND SET STATE ****/

    let freqTob = {}

        totalTobUniques.forEach(obj => {
            // reconstruct item name
            let itemName = (obj.embeds[0].author.name).toLowerCase().replace(/\s+/g, "-")

            if (freqTob[itemName]) {
                freqTob[itemName].num++
            } else {
                freqTob[itemName] = {
                    id: undefined,
                    img: undefined,
                    num: 1,
                }
                // set unique id
                freqTob[itemName].id = itemName
     
                // fetch image for this item and put into frequency object
                if (itemName in imageMap) {
                    freqTob[itemName].img = imageMap[itemName.toLowerCase()]
                }
            }
        })  

        setTobFrequencies(freqTob) 
        
        let freqCox = {}

        totalCoxUniques.forEach(obj => {
            // reconstruct item name
            let itemName = (obj.embeds[0].author.name).toLowerCase().replace(/\s+/g, "-")

            if (freqCox[itemName]) {
                freqCox[itemName].num++
            } else {
                freqCox[itemName] = {
                    id: undefined,
                    img: undefined,
                    num: 1,
                }
                // set unique id
                freqCox[itemName].id = itemName
     
                // fetch image for this item and put into frequency object
                if (itemName in imageMap) {
                    freqCox[itemName].img = imageMap[itemName.toLowerCase()]
                }
            }
        })  
        
        setCoxFrequencies(freqCox)

        /*
        if (totalUniques.length) {
          console.log(totalUniques.filter(item => getPlayerNameFromObject(item.embeds[0].fields[0].value).toLowerCase() == "hailey"))
          console.log(getPlayerNameFromObject(totalUniques[200].embeds[0].fields[0].value).toLowerCase())
        }
        */

  }, [totalTobUniques, totalCoxUniques])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path='/'
            exact
            element={
              <Home
                tobFrequencies={tobFrequencies}
                coxFrequencies={coxFrequencies}
                playersData={playersData}
                imgs={imgs}
                totalTobUniques={totalTobUniques}
                totalCoxUniques={totalCoxUniques}
              />
            }
          />
          <Route
            path='/leaderboards'
            element={
              <Leaderboards
                playersData={playersData}
                tobFrequencies={tobFrequencies}
                coxFrequencies={coxFrequencies}
              />
            }
          />
          <Route path='/player/:playername' element={<Player playersData={playersData}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
