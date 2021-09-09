import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import backgroundImage from "../../images/inspect_entrance.webp";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100vw", 
        height: "10vh", 
        display:"flex",
        backgroundColor: "#36466F",
        justifyContent:"center",
        alignItems:"center",
        color:"#fff"
    },
    footerContactUs: {
        cursor:"pointer"
    },
    
}))


function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            
            <p> &copy; 2021 FastPass Inc | <span className={classes.footerContactUs}>Contact Us</span></p>
        </div>
    )
}

export default Footer
