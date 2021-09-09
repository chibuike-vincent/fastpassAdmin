import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import backgroundImage from "../../images/create_visitor.svg";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100vw", 
        height: "50vh", 
        display:"flex",
        marginBottom:10
    },

    description: {
        width:"50%",
        height:"100%",
        backgroundColor:"#fff",
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },

    image:{
        width:"50%",
        height:"100%",
        backgroundImage: `url(${backgroundImage})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "contain",
        
    },
    
    
}))


function SectionFour() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            
            <div className={classes.description}>
                <h2 style={{fontFamily: "serif",}}>Grant permission to visitors within your dinning table</h2>
                <p style={{fontFamily: "Lato", width:"80%"}}>With FastPass all you need is a 1 minute form fill and your visitor will be granted access to your appartment. Fill out the create visitor form on your mobile app and the security man at the gate need not call you to come verify your customer. Life made easy right?</p>
            </div>
            <div className={classes.image}></div>
        </div>
    )
}

export default SectionFour
