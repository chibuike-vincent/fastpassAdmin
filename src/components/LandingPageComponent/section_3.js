import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import backgroundImage from "../../images/inspect_entrance.webp";

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


function SectionThree() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.image}></div>
            <div className={classes.description}>
                <h2 style={{fontFamily: "serif",}}>Do you want to stop unauthorized visits?</h2>
                <p style={{fontFamily: "Lato", width:"80%"}}>If your answer is yes to the above question then search no more because FastPass helps you determine who comes to your house or call your phone from the gate. </p>
                <p style={{fontFamily: "Lato", width:"80%"}}>With FastPass, na person wey you invite de come...</p>
            </div>
            
        </div>
    )
}

export default SectionThree
