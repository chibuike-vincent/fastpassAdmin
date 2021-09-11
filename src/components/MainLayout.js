import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {AiTwotoneSecurityScan} from "react-icons/ai"

import { Link, useHistory } from "react-router-dom";
import {navigations, Secondnavigations} from "../routes/navigations"

import {getCurrentUser} from "../../src/businessLogic"

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:"#f4f4f4",
    color: "#36466F"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#36466F"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    backgroundColor:"#D1E2E3"
  },
  link:{
    textDecoration: "none"
  },
  icon_main: {
    color: "#fff",
    width: "20px"
  },
  name: {
    color: "#fff",
    marginLeft: -12
  },
  listingTwo: {
    marginTop: 200
  },
  logoContainer: {
    width:"100%", 
    color: 'white', 
    alignItems:"center", 
    justifyContent:"center", 
    display:"flex"
  },
  logo: {
    width:"30%", 
    height:50,
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center", 
    borderRadius: 100, 
    border:"1px solid yellow", 
    margin:10
  }

}));

export default function MainLayout({children}) {
  const classes = useStyles();
  const [user, setUser] = useState({})

  useEffect(() => {
    const activeUser = async() => {
      const user = await getCurrentUser()
      setUser(user)
    }
    activeUser()
  }, [])

 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap style={{fontWeight:"bold"}}>
            {user && user.data ? user.data.userData.fullname : ""}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} >
          <div className={classes.logoContainer}>
            <div className={classes.logo}>
            <AiTwotoneSecurityScan size={50}/>
            </div>
          <p>
            <span style={{color:"red", fontWeight:"bold",fontStyle:"italic"}}>Fast</span><span style={{color:"yellow", fontWeight:"bold",fontStyle:"italic"}}>Pass</span>
          </p>
          </div>
        </div>
        <Divider />
        <List className={classes.listing}>
          {
            navigations.map(item => (
              <Link to={item.route} className={classes.link}>
                <ListItem button key={item.name} className={classes.items}>
                <ListItemIcon className={classes.icon_main}>{item.mainIcon}</ListItemIcon>
                <ListItemText primary={item.name} className={classes.name} />
                <ListItemText secondary={item.arrow} className={classes.arrow} />
              </ListItem>
              </Link>
            ))
          }
        </List>
        <Divider />
        <List className={classes.listingTwo}>
          {
            Secondnavigations.map(item => (
              <Link to={item.route} className={classes.link}>
                <ListItem button key={item.name} className={classes.items}>
                <ListItemIcon className={classes.icon_main}>{item.mainIcon}</ListItemIcon>
                <ListItemText primary={item.name} className={classes.name} />
                <ListItemText secondary={item.arrow} className={classes.arrow} />
              </ListItem>
              </Link>
            ))
          }
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
       {children}
      </main>
    </div>
  );
}