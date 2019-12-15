import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import BorderAllIcon from '@material-ui/icons/BorderAll';
import Typography from '@material-ui/core/Typography'
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import { red } from '@material-ui/core/colors'
import Avatar from '@material-ui/core/Avatar';
import HeightIcon from '@material-ui/icons/Height';
import TextField from '@material-ui/core/TextField';
import LayersIcon from '@material-ui/icons/Layers';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import Divider from '@material-ui/core/Divider';
import Buildings from './Buildings'
import AssignmentIcon from '@material-ui/icons/Assignment';
import { deepOrange, green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '20px',
    width: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  container: {
    margin: '20px',
    padding: theme.spacing(3, 2)
  },
  paper: {
    margin: '20px',
    padding: theme.spacing(3, 2)
  },
  square: {
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  rounded: {
    color: '#fff',
    backgroundColor: green[500],
    margin: '5px'
  },
  textfield: {
    marginLeft: '30px',
    display: 'inline-block',
    position: 'flex'
  },
  av: {
    display: 'inline-block'
  },
  formControl: {
    marginLeft: '10px',
    minWidth: '120px',
  }
}));

function Calculation() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <div>
            <Buildings />
            <Paper className={classes.container}>
              <Typography variant="h5" component="h3">
                Choose a building type
              </Typography>
              <Typography component="p">
                Depending on the type of your building, the calculation formula is going to be different. Cannot find you building type? Add one here.
              </Typography>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <div className={classes.av}>
            <Avatar variant="rounded" className={classes.rounded}>
              <FilterNoneIcon />
            </Avatar>
            </div>
            <TextField className={classes.textfield} id="standard-basic" label="Number of walls" />
            <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Material</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Stone</MenuItem>
          <MenuItem value={20}>Glass</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            <br></br>
            <br></br>
            <Divider />
            <br></br>
            <Avatar variant="rounded" className={classes.rounded}>
              <BorderAllIcon />
            </Avatar>
            <TextField className={classes.textfield} id="standard-basic" label="Number of windows" />
            <br></br>
            <Divider />
            <br></br>
            <Avatar variant="rounded" className={classes.rounded}>
              <HeightIcon />
            </Avatar>
            <TextField className={classes.textfield} id="standard-basic" label="Length of walls" />
            <br></br>
            <Divider />
            <br></br>
            <Avatar variant="rounded" className={classes.rounded}>
              <LayersIcon />
            </Avatar>
            <TextField className={classes.textfield} id="standard-basic" label="Base layer" />
            <br></br>
            <Divider />
            <br></br>
            <Avatar variant="rounded" className={classes.rounded}>
              <TextFormatIcon />
            </Avatar>
            <TextField className={classes.textfield} id="standard-basic" label="Area" />
            <br></br>
            <Divider />
            <br></br>
            <Button variant="contained" color="#6CC417">Calculate</Button>
          </Paper>
        </Grid>
      </Grid>      
    </Card>
  );
}

export default Calculation;
