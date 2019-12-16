import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

function TabPanel(props) {
  //MIDDLE AUTOMATIC SCROLL BUTTONS
  const { children, value, index, ...other } = props;

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
    margin: '0px',
  },
  menu: {
    backgroundColor: '#29293d',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: '20px',
  },
  card: {
    maxWidth: 545,
    padding: '20px',
    position: 'center',
  },
  media: {
    height: 140,
  },
  tab: {
    color: '#29293d',
  },
  brand: {
    backgroundColor: '#29293d',
  },
}));

/*MIDDLE AUTOMATIC SCROLL BUTTONS   */
export default function ScrollableTabsButtonAuto() {
  const classes = useStyles(); //UPPERMOST MENUBAR
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('helo');
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
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            className="tab"
            label="Building type"
            component={Link}
            {...a11yProps(0)}
            to="/building"
          />
          <Tab
            className="tab"
            label="Materials"
            component={Link}
            {...a11yProps(1)}
            to="/materials"
          />
          <Tab
            className="tab"
            label="Objects"
            component={Link}
            {...a11yProps(2)}
            to="/objects"
          />
          <Tab
            className="tab"
            label="Calculate"
            component={Link}
            {...a11yProps(3)}
            to="/calculate"
          />
          <Tab
            className="tab"
            label="Result"
            component={Link}
            {...a11yProps(4)}
            to="/result"
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
