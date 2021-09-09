import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import backgroundImage from "../../images/security_image.webp";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: "100vw", 
        height: "100vh", 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        margin:0,
        padding:0,
        fontStyle: "serif"
    },

    
    title: {
        marginLeft:20,
        fontFamily: "Montserrat",
    },
    overlay: {
        width: "inherit", 
        height: "100vh", 
        backgroundColor: "#00000098", 
        position: "absolute" ,
        color:"white",
        margin:0,
        paddingLeft:0,
        fontStyle: "serif"
    },
    header: {
        width:"100%",
        display: "flex",
        justifyContent: "space-between"
    },
    menus: {
        width:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        float:"right",
        
    },
    menuItems: {
        width:"50%",
        display:"flex",
        float:"right",
        justifyContent:"space-around",
        listStyle:"none",
        textDecoration:"none",
        fontFamily:"Quicksand"
    },
    item: {
        textDecoration:"none",
        color:"white"
    },

    intro: {
        marginLeft: 20,
        marginTop: 200,
        fontFamily: "serif",
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

function SectionOne() {
    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>
            <div className={classes.overlay}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <h2><span style={{color:"red"}}>Fast</span><span style={{color:"#36466F"}}>Pass</span></h2>
                </div>
                <div className={classes.menus}>
                    <ul className={classes.menuItems}> 
                        <Link to="#" className={classes.item}>
                        <li >
                           Home
                        </li>
                        </Link>
                        <Link to="#" className={classes.item}>
                        <li >
                            About
                        </li>
                        </Link>
                        <Link to="#" className={classes.item}>
                        <li >
                            Contact
                        </li>
                        </Link>
                        <Link to="signup" className={classes.item}>
                        <li >
                            SignUp
                        </li>
                        </Link>
                        <Link to="login" className={classes.item}>
                        <li >
                            Login
                        </li>
                        </Link>
                        
                    </ul>
                </div>
            </div>

            <div className={classes.intro}>
                <div>
                    <h1 >Here comes your</h1>
                    <h1>Smart-security System</h1>
                </div>
                <div>
                <h2 style={{fontFamily: "serif", color: "salmon"}}>Is he/she worth welcoming?</h2>
                <Link to="signup">
                <button className={classes.button}>Get started</button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SectionOne
