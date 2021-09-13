import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Modal from "../modal/modal"
import Subscriptions from "../Subscriptions/Subscriptions"
import { useSelector } from 'react-redux'
import { changePassword } from "../../businessLogic";
import { ShowMessage, type } from "../Toaster";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '90%',
            display: "flex",
            marginLeft: "5%"
        },
    },
    container: {
        padding: 10,
        textAlign: "center"
    },
    title: {
        width: "8%",
        backgroundColor: "#36466F",
        borderRadius: 100,
        color: "white",
        marginLeft: "45%",
        justifyContent: "center",
        alignSelf: "center",
        display: "flex"
    },
    subContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    subStyle: {
        width: "70%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    password: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    pass: {
        width: "70%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    },
    inputContainer: {
        width: "70%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    },
    changePass: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    input: {
        width: "50%"
    }

}));

function Settings() {
    const [isChangePassword, setIsChangePassword] = React.useState(false)
    const [subStatus, setSubStatus] = React.useState("expired")
    const classes = useStyles();
    const userInfo = useSelector((state) => state.user);
    const [processing, setProcessing] = React.useState(false)
    const [values, setValues] = React.useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });



    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = async () => {
        try {
            setProcessing(true)
            const res = await changePassword({
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
                confirmPassword: values.confirmPassword
            });
            console.log(res, "change password")
            if (res.data.message) {
                setProcessing(false)
                ShowMessage(type.DONE, res.data.message);
                setIsChangePassword(false)
            } else {
                setProcessing(false)
                ShowMessage(type.ERROR, res.data);
            }
        } catch (err) {
            setProcessing(false)
            console.log(err)
        }
    }

    return (
        <Paper >
            <div className={classes.container} >
                <div className={classes.title} >
                    <h1>BH</h1>
                </div>
                <h1 >{userInfo.users.fullname}</h1>
                <h4>Address: {userInfo.users.address}</h4>


                <div className={classes.subContainer} >
                    <div className={classes.subStyle}>
                        <p>Subscription Type:</p>
                        <h4>Bronze</h4>
                    </div>
                    <div className={classes.subStyle} >
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

                <div className={classes.password} style={{ display: isChangePassword ? "none" : "flex" }}>
                    <div className={classes.pass} >
                        <p>Password:</p>
                        <input contentEditable={false} value="**********************" />
                    </div>
                    <Button style={{ display: isChangePassword ? "none" : "flex",backgroundColor: "#36466F", color:"white", alignSelf: "center" }} onClick={() => setIsChangePassword(true)}>Change Password</Button>
                </div>


                <div className={classes.changePass} style={{ display: isChangePassword ? "flex" : "none" }}>
                    <div className={classes.inputContainer} >
                        <p>Current Password:</p>
                        <TextField
                            onChange={handleChange('currentPassword')}
                            value={values.currentPassword}
                            id="outlined-basic"
                            label="Current Password"
                            variant="outlined"
                            className={classes.input} />
                    </div>
                    <div className={classes.inputContainer}>
                        <p> New Password:</p>
                        <TextField
                            onChange={handleChange('newPassword')}
                            value={values.newPassword}
                            id="outlined-basic"
                            label="New Password"
                            variant="outlined"
                            className={classes.input} />
                    </div>
                    <div className={classes.inputContainer}>
                        <p> Confirm Password:</p>
                        <TextField
                            onChange={handleChange('confirmPassword')}
                            value={values.confirmPassword}
                            id="outlined-basic"
                            label="Confirm Password"
                            variant="outlined"
                            className={classes.input} />
                    </div>
                    <div style={{ display: isChangePassword ? "flex" : "none", marginTop: 15, justifyContent:"space-between", width:"50%" }}> 
                    <Button style={{backgroundColor: "#36466F", color:"white"}} onClick={() => handleSubmit()}>Change</Button>
                    <Button style={{backgroundColor: "red", color:"white"}} onClick={() => setIsChangePassword(false)}>Cancel</Button>
                    </div>
                </div>

            </div>
        </Paper>
    )
}

export default Settings
