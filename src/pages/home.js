import React from 'react'
import HomePage from "../components/LandingPageComponent"
import Gaurd from "../images/9cSf.gif"

function Home() {
    return (
        <div>
            <HomePage />
            <div>
                <img src={Gaurd} style={{position: "fixed", top: "80%",left: "90%", marginLeft: "-100px", marginTop: "-93px", boxShadow: "0.5em 0.5em 0.7em #333", borderRadius: "1em",width:"200px", height:"200px"}}/>
            </div>
        </div>
    )
}

export default Home
