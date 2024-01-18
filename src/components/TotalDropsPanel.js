import React from "react";

const TotalDropsPanel = ({name, frequencies, img}) => {

    //console.log(frequencies)

    // create visuals for frequency display
    const items = Object.keys(frequencies).map(key => {
        const item = frequencies[key]
        return (
            <div key={item.id} className="total-drops-item_wrapper">
                <span className="frequency-label yellow">{item.num}</span>
                <img className="total-drops-img" src={item.img}/>
            </div>
        )
    })
    
    return (
        <div className="total-drops-wrapper">
            <div className="panel-header-bg">
                <img className="icon_small margin-inline_small" src={img}></img>
                <h2 className="small-heading-text">{name}</h2>
            </div>
            <div className="total-drops-items-bg">
                {items}
            </div>
        </div>
    )
}

export default TotalDropsPanel