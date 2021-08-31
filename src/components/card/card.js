import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {IoIosPeople} from "react-icons/io"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    cardContainer1: {
        width: "25%",
        borderRadius:10,
        boxShadow: "0px 2px 2px 0px gray",
        backgroundColor: "green",
        height: 120,
    },
    cardContainer2: {
        width: "25%",
        borderRadius:10,
        boxShadow: "0px 2px 2px 0px gray",
        backgroundColor: "red",
        height: 120,
    },
    cardContainer3: {
        width: "25%",
        borderRadius:10,
        boxShadow: "0px 2px 2px 0px gray",
        backgroundColor: "brown",
        height: 120,
    },
    innerCardContainer: {
        width: "98%",
        height: "100%",
        borderRadius:10,
        backgroundColor: "white",
        float:"right"
    },
    count: {
        width: "20%", 
        height: 50, 
        margin: 10, 
        borderRadius:100, 
        textAlign:"center", 
        border:"1px solid #36466F", 
        color: "#36466F"
    },
    image_countContainer: {
        display: "flex", 
        marginTop: -20, 
        justifyContent:"space-between"
    },
    title: {
        color: "#36466F", 
        textAlign:"center"
    }
  }));

function Card() {
    const classes = useStyles();
    const cardDetail = [
        {

        }
    ]
    return (
        <div className={classes.root}>
            <div className={classes.cardContainer1}>
                <div className={classes.innerCardContainer}>
                    <h2 className={classes.title}>Total Tenants</h2>
                    <div className={classes.image_countContainer}>
                    <IoIosPeople size={70} color="#36466F"/>
                    <div className={classes.count}>
                        <p>3000</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className={classes.cardContainer2}>
                <div className={classes.innerCardContainer}>
                    <h2 className={classes.title}>Total Security</h2>
                    <div className={classes.image_countContainer}>
                    <IoIosPeople size={70} color="#36466F"/>
                    <div className={classes.count}>
                        <p>3000</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className={classes.cardContainer3}>
                <div className={classes.innerCardContainer}>
                    <h2 className={classes.title}>Total Visitors</h2>
                    <div className={classes.image_countContainer}>
                    <IoIosPeople size={70} color="#36466F"/>
                    <div className={classes.count}>
                        <p>3000</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
