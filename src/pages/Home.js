import React from "react";
import SearchPanel from "../components/SearchPanel";
import TotalDropsMain from "../components/TotalDropsMain";
import RecentItems from "../components/RecentItems";
import Leaderboard from "../components/Leaderboard";
import Navbar from "../components/Navbar";
import imgs from "../images";
import Weightings from "../components/Weightings";
import BarChart from "../components/BarChart";

const Home = ({coxFrequencies, tobFrequencies, totalTobUniques, totalCoxUniques, playersData, imgs}) => {

    return (
        <div>
            <Navbar />
            <div className='container'>
                <h1 className='heading_large'>SEARCH USER</h1>
                <div className='search-dashboard'>
                    <SearchPanel playersData={playersData}/>
                </div>
                <h1 className='heading_large'>GLOBAL METRICS</h1>
                <div className='main-analytics'>
                    <TotalDropsMain tobFrequencies={tobFrequencies} coxFrequencies={coxFrequencies}/>
                    <RecentItems totalTobUniques={totalTobUniques} totalCoxUniques={totalCoxUniques}/>
                </div>
                <h1 className='heading_large'>DROP RATES (ToB)</h1>
                <div>
                    <Weightings frequencies={tobFrequencies} />
                    <BarChart frequencies={tobFrequencies} datasetName={"Theatre of Blood"} backgroundColor={"#ed3434"}/> 
                </div>
                <h1 className='heading_large'>DROP RATES (CoX)</h1>
                <div>
                    <Weightings frequencies={coxFrequencies} />
                    <BarChart frequencies={coxFrequencies} datasetName={"Chambers of Xeric"} backgroundColor={"#acfc49"}/> 
                </div>
                <h1 className='heading_large'>PLANKER LEADERBOARD</h1>
                <div className='planker-analytics'>
                    <Leaderboard playersData={playersData} item={'Plank'} img={imgs['plank.png']}/> 
                </div>
            </div>
        </div>
    )
}

export default Home