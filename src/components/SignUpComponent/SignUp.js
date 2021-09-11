import React from 'react'
import { Paper } from '@material-ui/core'
import backgroundImage from "../../images/Entrance_gate.jpg";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link, useHistory } from "react-router-dom";
import {AdminSignUp} from "../../businessLogic";
import { ShowMessage, type } from "../Toaster";
import Loader from "react-loader-spinner";

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
        overflow:"scroll"
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
        marginTop: 50,
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

function SignUp() {
    const classes = useStyles();
    const history = useHistory()
    const [processing, setProcessing] = React.useState(false)
    const [values, setValues] = React.useState({
        fullname: "",
        email:"",
        address: "",
        phone:"",
        whoYouAre: '',
        total_rooms_or_block: "",
        password: '',
        repeatPassword: ""
      });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleSubmit = async() => {
        try {
            setProcessing(true)
           const res = await AdminSignUp({
            fullname: values.fullname,
            email:values.email,
            address: values.address,
            phone:values.phone,
            whoYouAre: values.whoYouAre,
            total_rooms_or_block: values.total_rooms_or_block,
            password: values.password,
            repeatPassword: values.repeatPassword
          });
          if(res.data.message){
            setProcessing(false)
            //dispatch( saveAccessToken({payload: res.token}))
            ShowMessage(type.DONE, res.data.message);
            history.push('/login')
          }
        } catch (err) {
            setProcessing(false)
          console.log(err)
        }
      }

    //const [whoYouAre] = React.useState("")

    const userType = [
        {
            value:"",
            label:"Select"
        },
        {
            value:"Residential",
            label:"Residential"
        },
        {
            value:"Hotel",
            label:"Hotel"
        },
        {
            value: "Estate",
            label: "Estate"
        },
        {
            value: "Corporate office",
            label: "Corporate office"
        }
    ]
    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <Paper className={classes.paper}>
                    <div className={classes.logoContainer}>
                        <h1>Create Account</h1>
                    </div>
                    <div className={classes.form}>
                    <TextField 
                    id="outlined-basic" 
                    type="text" 
                    label="Full Name (Individual or Organization)" 
                    variant="outlined" className={classes.emailInput}
                    value={values.fullname} 
                    onChange={handleChange('fullname')} 
                    />
                    <TextField 
                    id="outlined-basic" 
                    type="email" 
                    label="Email" 
                    variant="outlined" 
                    className={classes.emailInput}
                    value={values.email} 
                    onChange={handleChange('email')} 
                    />
                    <TextField 
                    id="outlined-basic" 
                    type="text" 
                    label="Phone" 
                    variant="outlined" 
                    className={classes.emailInput}
                    value={values.phone} 
                    onChange={handleChange('phone')} 
                    />
                    <TextField 
                    id="outlined-basic" 
                    type="text" 
                    label="Address" 
                    variant="outlined" 
                    className={classes.emailInput}
                    value={values.address} 
                    onChange={handleChange('address')} 
                    />
                    <FormControl variant="outlined" className={classes.formControl} className={classes.emailInput}>
                        <InputLabel htmlFor="outlined-age-native-simple">Who you are</InputLabel>
                        <Select
                        native
                        label="Who you are"
                        value={values.whoYouAre} 
                        onChange={handleChange('whoYouAre')} 
                        inputProps={{
                            name: 'type',
                            id: 'outlined-age-native-simple',
                        }}
                        
                        >
                            {
                                userType.map(val => {
                                    return (
                                        <option aria-label={val.label} value={val.value} />
                                    )
                                })
                            }
                        
                        </Select>
                        </FormControl>
                        {values.whoYouAre === "Estate" ? (
                            <TextField 
                            id="outlined-basic" 
                            type="number" label="Total Blocks" 
                            variant="outlined" 
                            className={classes.emailInput}
                            value={values.total_rooms_or_block} 
                            onChange={handleChange('total_rooms_or_block')} 
                            />
                        ) : values.whoYouAre === "Hotel" ? (
                            <TextField 
                            id="outlined-basic" 
                            type="number" 
                            label="Total Rooms" 
                            variant="outlined" 
                            className={classes.emailInput}
                            value={values.total_rooms_or_block} 
                            onChange={handleChange('total_rooms_or_block')} 
                            />
                        ) : "" }
                    <TextField 
                    id="outlined-basic" 
                    type="password" 
                    label="Password" 
                    variant="outlined" 
                    className={classes.emailInput}
                    value={values.password} 
                    onChange={handleChange('password')} 
                    />
                    <TextField 
                    id="outlined-basic" 
                    type="password" 
                    label="Repeat Password" 
                    variant="outlined" 
                    className={classes.passwordInput}
                    value={values.repeatPassword} 
                    onChange={handleChange('repeatPassword')} 
                    />
                    </div>
                    <Button 
                    onClick={() => handleSubmit()} 
                    className={classes.button}>
                        {processing ? (
                            <Loader
                            type="TailSpin"
                            color="#00BFFF"
                            height={40}
                            width={40}
                          />
                        ) : "Sign Up"}
                        
                    </Button>
                    <h5> Already have account? <span className={classes.signUp} onClick={() => history.push("/login")}>Sign In!</span></h5>

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

export default SignUp
