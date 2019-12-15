import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {
  Link
} from "react-router-dom"

function TabPanel(props) {
  //MIDDLE AUTOMATIC SCROLL BUTTONS 
    const { children, value, index, ...other } = props

  return (
    
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

/*MIDDLE AUTOMATIC SCROLL BUTTONS   */
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

// UPPERMOST MENUBAR
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  menu: {
    backgroundColor: '#29293d',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: '20px'
  },
  card: {
    maxWidth: 545,
    padding: '20px',
    position:'center',
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: 'none',
    textColor: '#29293d'
  },
  brand:{
    backgroundColor: '#29293d'
  }
})
);



/*MIDDLE AUTOMATIC SCROLL BUTTONS   */
export default function ScrollableTabsButtonAuto() {
  const classes = useStyles(); //UPPERMOST MENUBAR
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
     <div className={classes.root}>
       <AppBar position="static" className={classes.brand}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Energy Pathfinder
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
        <AppBar position="static" color="default">
          <Tabs
            className={classes.link}
            value={value}
            onChange={handleChange}
            indicatorColor="#29293d"
            textColor="#29293d"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            >
              <Link className={classes.link} to="/building">
                <Tab label="Building type" {...a11yProps(0)} to="/building"/>
              </Link>
              <Link className={classes.link} to="/materials">
                <Tab label="Materials" {...a11yProps(1)} to="/materials"/>
              </Link>
              <Link className={classes.link} to="/objects">
                <Tab label="Objects" {...a11yProps(2)} to="/objects"/>
              </Link>
              <Link className={classes.link} to="/calculate">
                <Tab label="Calculate" {...a11yProps(3)} to="/calculate"/>
              </Link>
              <Link className={classes.link} to="/result">
                <Tab label="Result" {...a11yProps(4)} to="/result"/>
              </Link>
          </Tabs>
        </AppBar>
    </div>
   );
}