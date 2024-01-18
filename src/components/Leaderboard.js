import React from "react";

// the leaderboard shows the players who have received the most of a particular item
// the {item} is the item we are viewing the leaderboard for
const Leaderboard = ({playersData, item, img}) => {

    // variable will represent players sorted by number of items received
    var data = []

    // get array of "tuples" in format [playername, plankcount]
    Object.keys(playersData).map(key => {
        var username = key
        var itemCount = playersData[key][item] == undefined ? 0 : playersData[key][item].length
        var userAndItemCount = [username, itemCount]
        data.push(userAndItemCount)
    });

    // sort by num items & get 15 players who have received that item
    data = data.sort((a, b) => b[1] - a[1]);
    data = data.slice(0, 15);
    
    const leaderboardRows = data.map((info, i) => {
        // get number of items
        var user = info[0]
        // if item count is undefined (user has never received any of that item) then set to 0
        var itemCount = info[1] == undefined ? 0 : info[1]
        return (
            <div className="leaderboard-row">
                <span># {i + 1}</span>
                <img className="icon_small" src={img} />
                <div>
                   {itemCount}
                </div>
                <p>{user}</p>
            </div>
        )
    })    
    
    return (
        <div className="leaderboard-wrapper">
            <div className="leaderboard-list">
                {leaderboardRows}
            </div>
        </div>
    )
}

export default Leaderboard