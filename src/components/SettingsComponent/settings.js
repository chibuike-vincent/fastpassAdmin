import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Modal from "../modal/modal"
import Subscriptions from "../Subscriptions/Subscriptions"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '90%',
            display: "flex",
            marginLeft: "5%"
        },

    },

}));

function Settings() {
    const [isChangePassword, setIsChangePassword] = React.useState(false)
    const [subStatus, setSubStatus] = React.useState("expired")
    const classes = useStyles();
    return (
        <Paper style={{height: "100vh"}}>
            <div style={{ padding: 10, textAlign: "center" }}>
                <div style={{
                    width: "8%", backgroundColor: "#36466F", borderRadius: 100, color: "white", marginLeft: "45%",
                    justifyContent: "center", alignSelf: "center", display: "flex"
                }}>
                    <h1>BH</h1>
                </div>
                <h1 >Brains & Hammers</h1>
                <h4>Address: Utako Abuja Nigeria</h4>


                <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 5}}>
                    <div style={{ width: "70%", display: "flex",  justifyContent: "space-between", alignItems: "center"}}>
                        <p>Subscription Type:</p>
                        <h4>Bronze</h4>
                    </div>
                    <div style={{ width: "70%", display: "flex",  justifyContent: "space-between", alignItems: "center",}}>
                        <p>Subscription Status:</p>
                        <h4 style={{ color: subStatus !== "active" ? "salmon" : "green" }}>{subStatus}</h4>
                    </div>
                    {
                        subStatus !== "active" ? (
                            <Button>
                                <Modal Component={Subscriptions} buttonTitle="Subscribe" title="Choose Your Plan" />
                            </Button>
                            
                        ) : null
                    }
                </div>

                <div style={{ display: isChangePassword ? "none" : "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", padding: 5 }}>
                <div style={{ width: "70%", display: "flex",  justifyContent: "space-between", alignItems: "center", padding: 5 }}>
                    <p>Password:</p>
                    <input contentEditable={false} value="**********************" />
                    </div>
                    <Button style={{display: isChangePassword ? "none" : "flex", alignSelf:"center"}} onClick={() => setIsChangePassword(true)}>Change Password</Button>
                </div>
                

                <div style={{ width: "100%", display: isChangePassword ? "flex" : "none", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 5 }}>
                    <div style={{ width: "70%",display: "flex", justifyContent: "space-between", alignItems: "center", padding: 5 }}>
                        <p>Current Password:</p>
                        <TextField style={{width: "50%",}} id="outlined-basic" label="Current Password" variant="outlined" className={classes.input}/>
                    </div>
                    <div style={{ width: "70%", display: "flex",  justifyContent: "space-between", alignItems: "center", padding: 5 }}>
                        <p> New Password:</p>
                        <TextField style={{width: "50%"}} id="outlined-basic" label="New Password" variant="outlined" className={classes.input}/>
                    </div>
                    <Button style={{display: isChangePassword ? "flex" : "none", marginTop: 15}} onClick={() => setIsChangePassword(false)}>Change</Button>
                </div>
                
            </div>
        </Paper>

    )
}

export default Settings
