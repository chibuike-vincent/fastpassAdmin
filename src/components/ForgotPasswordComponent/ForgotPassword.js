import React from 'react'
import { Paper } from '@material-ui/core'
import backgroundImage from "../../images/Entrance_gate.jpg";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {AiTwotoneSecurityScan} from "react-icons/ai"
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex", 
        width: "100vw", 
        height: "100vh", 
        overflow: "hidden" 
    },
    formContainer: {
        width: "40%", 
        height: "100%"
    },
    paper:{
        height: "100%", 
        boxShadow: "0px 8px 0px 0px gray", 
        alignItems:"center", 
        display:"flex", 
        flexDirection:"column",
        justifyContent: "center"
    },
    logoContainer: {
      width:"100%", 
      color: "#36466F", 
      alignItems:"center", 
      justifyContent:"center", 
      display:"flex",
      flexDirection:"column"
    },
    logo: {
      width:"10%", 
      height:50,
      display:"flex", 
      justifyContent:"center", 
      alignItems:"center", 
      borderRadius: 100, 
      border:"1px solid #36466F", 
      marginTop:40
    },
    form: {
        width: "100%", 
        display:"flex", 
        flexDirection:"column", 
        padding:10, 
        justifyContent:"center", 
        alignItems:"center"
    },
    emailInput: {
        margin:10, 
        width:"80%"
    },
    passwordInput: {
        marginTop:20, 
        width:"80%"
    },
    forgotPassword: {
        alignSelf:"flex-start", 
        marginTop:-0.5,
        marginLeft:"10%", 
        color:"#36466F", 
        cursor:"pointer"
    },
    button: {
        backgroundColor:"red", 
        width:"80%",
        color:'white',
        '&:hover': {
            backgroundColor:"red",
        }
    },
    signUp: {
        color:"#36466F", 
        cursor:"pointer"
    },
    logoTextOne:{
        color: "red", 
        fontWeight: "bold", 
        fontStyle: "italic"
    },
    logoTexttwo :{
        color: "#36466F", 
        fontWeight: "bold", 
        fontStyle: "italic"
    },
    footer: {
        marginTop: 135, 
        color:"#36466F"
    },
    footerContactUs: {
        cursor:"pointer"
    },
    imageContainer: {
        width: "60%", 
        height: "100%", 
        overflow: "hidden"
    },
    overlay: {
        width: "inherit", 
        height: "100%", 
        backgroundColor: "#00000080", 
        position: "absolute" 
    },
    imageBackground: {
        width: "100%", 
        height: "100%", 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover" 
    }
  
  }));

function ForgotPassword() {
    const classes = useStyles();
    const history = useHistory()
    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <Paper className={classes.paper}>
                    <div className={classes.logoContainer}>
                    <div className={classes.logo}>
                            <AiTwotoneSecurityScan size={50} />
                        </div>
                        <p>
                            <span className={classes.logoTextOne}>Fast</span><span className={classes.logoTexttwo}>Pass</span>
                        </p>
                        <h3>Request Forgot Password Token</h3>
                    </div>
                    <div className={classes.form}>
                    <TextField id="outlined-basic" type="email" label="Enter Email Address" variant="outlined" className={classes.emailInput}/>
                    </div>
                    <Button onClick={() => history.push("/resetpassword/123")} className={classes.button}>Request</Button>

                    <p className={classes.footer}> &copy; 2021 FastPass Inc | <span className={classes.footerContactUs}>Contact Us</span></p>
                </Paper>
            </div>
            <div className={classes.imageContainer}>
                <div className={classes.overlay}></div>
                <div className={classes.imageBackground}></div>
            </div>

        </div>
    )
}

export default ForgotPassword
