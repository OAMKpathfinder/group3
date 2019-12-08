import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 545,
    padding: '20px',
    position:'center',


  },
  media: {
    height: 140,
  },
   
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
       <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
               <h1> PATHFINDER</h1>
            </Typography>
            <Button color="inherit">FI</Button>
            <Button color="inherit">ENG</Button>
            <Button color="inherit">SV</Button>
          </Toolbar>
        </AppBar>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            >
            <Tab label="ETUSIVU" {...a11yProps(0)} />
            <Tab label="KERROSTALO" {...a11yProps(1)} />
            <Tab label="OMAKOTITALO" {...a11yProps(2)} />
            <Tab label="VINKIT" {...a11yProps(3)} />
            <Tab label="KOKEMUKSIA" {...a11yProps(4)} />
            <Tab label="YHTEYSTIEDOT" {...a11yProps(5)} />
            <Tab label="MUU" {...a11yProps(6)} />
          </Tabs>
        </AppBar>
    </div>
   );
}