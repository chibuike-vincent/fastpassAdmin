import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import backgroundImage from "../../images/visitor_record.png";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100vw", 
        height: "50vh", 
        display:"flex",
        marginBottom: 10
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


function SectionFive() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.image}></div>
            <div className={classes.description}>
                <h2 style={{fontFamily: "serif"}}>Wondering who visited and when?</h2>
                <p style={{fontFamily: "Lato", width:"80%"}}>No need thinking too much, Just a login to the FastPass mobile gets all your anxieties settled.</p>
            </div>
            
        </div>
    )
}

export default SectionFive
