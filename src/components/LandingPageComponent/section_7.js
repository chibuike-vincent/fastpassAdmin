import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    container: {
        width: "100vw", 
        height: "25vh", 
         
        backgroundRepeat: "repeat", 
        backgroundSize: "contain",
        margin:0,
        padding:0,
        fontStyle: "serif"
    },
    overlay: {
        width: "inherit", 
        height: "25vh", 
        backgroundColor: "#00000012", 
        position: "absolute" ,
        color:"#36466F",
        margin:0,
        paddingLeft:0,
        fontStyle: "serif",
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
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
   },

   subscribe: {
        width:"30%",
        padding:10,
        margin:5,
        display:"flex",
        justifyContent:"space-around"
   },
    
   input:{
       marginBottom: "10px",
       padding:12,
       marginLeft: 10,
       border: "0.5px solid #36466F",
       borderRadius: 7
   }
    
}))


function SectionSix() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.overlay}>
                <p>Enter your email for latest updates</p>
                <div className={classes.subscribe}>
                <input  placeholer="enter email" className={classes.input}/>
                <Link to="#">
                <button className={classes.button}>Subscribe</button>
                </Link>
                </div>
            </div>
            
        </div>
    )
}

export default SectionSix
