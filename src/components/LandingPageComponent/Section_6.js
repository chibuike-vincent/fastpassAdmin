import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import backgroundImage from "../../images/visitor_record.png";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    container: {
        width: "100vw", 
        height: "25vh", 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundRepeat: "repeat", 
        backgroundSize: "contain",
        margin:0,
        padding:0,
        fontStyle: "serif"
    },
    overlay: {
        width: "inherit", 
        height: "25vh", 
        backgroundColor: "#00000080", 
        position: "absolute" ,
        color:"white",
        margin:0,
        paddingLeft:0,
        fontStyle: "serif",
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        color: "gold"
    },

   button: {
       color:"#fff",
       padding: 10,
       backgroundColor:"#36466F",
       border: "none",
       borderRadius: 7,
       fontWeight: "bold",
       fontSize: 18,
       fontFamily:"serif",
       cursor: "pointer"
   }
    
    
}))


function SectionSix() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.overlay}>
                <h2 style={{fontFamily: "serif"}}>Is he/she worth welcoming?</h2>
                <Link to="signup">
                <button className={classes.button}>Get started</button>
                </Link>
            </div>
            
        </div>
    )
}

export default SectionSix
