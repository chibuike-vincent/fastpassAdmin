import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import backgroundImage from "../../images/guard.webp";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100vw", 
        height: "50vh", 
        display:"flex"
    },

    description: {
        width:"50%",
        height:"100%",
        backgroundColor:"#fff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        textAlign:"center"
    },

    image:{
        width:"50%",
        height:"100%",
        backgroundImage: `url(${backgroundImage})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        
    },
    
    
}))


function SectionTwo() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.description}>
                <h2 style={{fontFamily: "serif",}}>Grant your security man a super power</h2>
                <p style={{fontFamily: "Lato", width:"80%"}}>Does he get preasurized and end up calling you even when you told him not to? FastPass is here to let him know who you want to see and not want to see. Now every visitor will have a code and without your security personnel will never let in.</p>
            </div>
            <div className={classes.image}></div>
        </div>
    )
}

export default SectionTwo
