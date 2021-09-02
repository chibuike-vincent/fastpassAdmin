import { Paper } from '@material-ui/core'
import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {FaCheck} from "react-icons/fa"

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor:"red", 
        width:"80%",
        color:'white',
        marginTop: 50,
        '&:hover': {
            backgroundColor:"red",
        }
    },
   
    card: {
        width:"20%", 
        display: "flex",  
        flexDirection:"column",
        "&:hover": {
            cursor: "pointer"
        }
    },
    container: {
        width:"100%", 
        display: "flex",
        justifyContent: "space-around"
    }
   
  
  }));

function Subscriptions() {
    const classes = useStyles();
    const [id, setId] = React.useState(0)
    const subs = [
        {
            id: 1,
            title:"Free",
            value:"",
            duration: "7 Days",
            textColor:"#36466F"
        },
        {
            id: 2,
            title: "Bronze",
            value:"$8",
            duration: "1 Month",
            color: "#CD7F32",
            textColor:"#36466F"
        },
        {
            id: 3,
            title:"Silver",
            value:"$14",
            duration: "6 Months",
            color: "#C0C0C0",
            textColor:"#36466F"
        },
        {
            id: 4,
            title: "Gold",
            value:"$199",
            duration: "1 Year",
            color:"#FFD700",
            textColor:"#36466F"
        }
    ]
    return (
        <div >
           <div className={classes.container}>
           {
               subs.map(item => {
                return (
                    <Paper className={classes.card} onClick={() => setId(item.id)} style={{border: item.id === id ? "1px solid yellow" : "none"}}>
                    <h2 style={{color: item.color}}>{item.title}</h2>
                    <h4 style={{color: item.textColor}}>{item.value}</h4>
                    <p style={{color: item.textColor}}>{item.duration}</p>

                    <div style={{display: item.id === id ? "block" : "none", color:"green"}}>
                        <FaCheck />
                    </div>
                </Paper>
                )
               })
           }
           </div>
           <Button className={classes.button}>Continue</Button>
        </div>
    )
}

export default Subscriptions
